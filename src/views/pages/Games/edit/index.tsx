import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form"
import { connect } from 'react-redux';
import { useParams } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useNavigate } from 'react-router-dom';

import MainLayout from "@/views/layouts/MainLayout"
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button"
import { Form, FormField } from "@/components/ui/form"
import FormItemInput from "@/components/form/form-item-input"
import SelectManageGenre from "@/components/select-manage-genre"
import FormItemDate from "@/components/form/form-item-date"
import FormItemTextarea from "@/components/form/form-item-textarea"
import UploadImage from "@/components/upload-image";
import ImageGame from "@/components/image-game";
import NotificationAlert from "@/components/notification-alert";

import { RootState } from "@/store/types/rootTypes";
import { IResponseGenres } from "@/dtos/genres.dto";
import { IResponseGameDetail, IGameData } from "@/dtos/games.dto";

import { getGenresRequest, addGenreRequest, deleteGenreRequest } from '@/store/actions/genres';
import { getGameDetailRequest, updateGameRequest, uploadImageGameRequest } from "@/store/actions/games";
import { selectGenres } from '@/store/selectors/genresSelector';
import { selectGameDetail, selectImageGameUrl } from "@/store/selectors/gamesSelector";
import { selectNotification } from "@/store/selectors/notification";

const FormSchema = z.object({
  title: z.string().min(1, {
    message: "Username can not be empty.",
  }),
  genreId: z.string().min(1, {
    message: "Genre can not be empty.",
  }),
  releaseDate: z.coerce.date({
    required_error: "Please select a date and time",
    invalid_type_error: "That's not a date!",
  }),
  imageUrl: z.string().min(1, {
    message: "Image can not be empty.",
  }),
  content: z.string().min(1, {
    message: "Content can not be empty.",
  }),
})

interface GameProps extends IResponseGameDetail {
  loading: boolean;
  error: null;
}

interface GenresProps extends IResponseGenres {
  loading: boolean;
  error: null;
}

interface GameEditComponentProps {
  game: GameProps;
  imageUrl: string;
  genres: GenresProps;
  getGameDetail: (id: string) => void;
  getGenres: () => void;
  addGenre: (name: string) => void;
  deleteGenre: (id: string) => void;
  updateGame: (id: string, data: IGameData) => void;
  uploadImageGame: (formData: object) => void;
  notification: string;
}

const GameEditComponent: React.FC<GameEditComponentProps> = (props) => {
  const {
    game,
    getGameDetail,
    imageUrl,
    genres,
    addGenre,
    updateGame,
    uploadImageGame,
    deleteGenre,
    getGenres,
    notification
  } = props

  const [newGenre, setNewGenre] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();

    getGenres()

    if (id) {
      getGameDetail(id);
    }

    if (imageUrl) {
      setImageUrlValue()
    }

    if (notification) {
      toast({
        title: "Notification",
        description: notification,
      })
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl, notification]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    const formData = new FormData();
    formData.append('image', file, file.name);

    uploadImageGame(formData)
  };

  const handleNewGenre = () => {
    if (newGenre.length > 0) {
      addGenre(newGenre)
      setNewGenre("")
    }
  };

  const handleDeleteGenre = (id: string) => {
    if (id.length > 0) {
      deleteGenre(id)
    }
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    values: {
      title: game.data.title,
      genreId: game.data.genreId,
      releaseDate: game.data.releaseDate,
      imageUrl: game.data.imageUrl,
      content: game.data.content
    },
  })

  const setImageUrlValue = () => {
    form.setValue('imageUrl', imageUrl)
  };

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    if (id && data) {
      await updateGame(id, data)
      navigate('/games');
    }
  }

  return (
    <MainLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">

        {game.error && (
          <NotificationAlert title="Error" description={game.error} />
        )}

        {genres.error && (
          <NotificationAlert title="Error" description={genres.error} />
        )}

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex">
              <div className="w-2/3 space-y-6">

                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItemInput
                      inputRef={inputRef}
                      label="Title"
                      addClass="w-4/5"
                      field={field}
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name="genreId"
                  render={({ field }) => (
                    <SelectManageGenre
                      newGenre={newGenre}
                      setNewGenre={setNewGenre}
                      handleNewGenre={handleNewGenre}
                      handleDeleteGenre={handleDeleteGenre}
                      options={genres.data}
                      field={field} />
                  )}
                />

                <FormField
                  control={form.control}
                  name="releaseDate"
                  render={({ field }) => (<FormItemDate label="Release Date" field={field} />)}
                />

                <FormField
                  control={form.control}
                  name="imageUrl"
                  render={({ field }) => (<UploadImage field={field} handleFileChange={handleFileChange} />)}
                />

              </div>
              <ImageGame imageUrl={form.getValues('imageUrl')} />
            </div>
            
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (<FormItemTextarea label="Content" field={field} rows={20} />)}
            />

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </MainLayout>
  )
}

const mapStateToProps = (state: RootState) => ({
  game: selectGameDetail(state),
  imageUrl: selectImageGameUrl(state),
  genres: selectGenres(state),
  notification: selectNotification(state)
});

const mapDispatchToProps = {
  getGameDetail: getGameDetailRequest,
  getGenres: getGenresRequest,
  updateGame: updateGameRequest,
  uploadImageGame: uploadImageGameRequest,
  addGenre: addGenreRequest,
  deleteGenre: deleteGenreRequest,
};

const GameEditContainer = connect(mapStateToProps, mapDispatchToProps)(GameEditComponent);
export default GameEditContainer;