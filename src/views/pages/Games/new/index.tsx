import { ChangeEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form"
import { connect } from 'react-redux';
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import MainLayout from "@/views/layouts/MainLayout"
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button"
import { Form, FormField } from "@/components/ui/form"
import FormItemInput from "@/components/form/form-item-input"
import SelectManageGenre from "@/components/select-manage-genre"
import FormItemDate from "@/components/form/form-item-date"
import FormItemTextarea from "@/components/form/form-item-textarea"
import UploadImage from "@/components/upload-image";
import NotificationAlert from "@/components/notification-alert";

import { RootState } from "@/store/types/rootTypes";
import { IResponseGenres } from "@/dtos/genres.dto"
import { IGameData } from "@/dtos/games.dto";

import { getGenresRequest, addGenreRequest, deleteGenreRequest } from '@/store/actions/genres';
import { addGameRequest, uploadImageGameRequest } from '@/store/actions/games';
import { selectGenres } from '@/store/selectors/genresSelector';
import { selectImageGameUrl } from '@/store/selectors/gamesSelector';
import { selectNotification } from "@/store/selectors/notification";

const FormSchema = z.object({
  title: z.string().min(1, {
    message: "Username can not be empty.",
  }),
  genreId: z.string().min(1, {
    message: "Genre can not be empty.",
  }),
  releaseDate: z.date({
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

interface GenresProps extends IResponseGenres {
  loading: boolean;
  error: null;
}

interface GameNewComponentProps {
  genres: GenresProps;
  imageUrl: string;
  getGenres: () => void;
  addGenre: (name: string) => void;
  deleteGenre: (id: string) => void;
  addGame: (data: IGameData) => void;
  uploadImageGame: (formData: object) => void;
  notification: string
}

const GameNewComponent: React.FC<GameNewComponentProps> = (props) => {
  const {
    genres,
    imageUrl,
    getGenres,
    addGenre,
    deleteGenre,
    addGame,
    uploadImageGame,
    notification
  } = props

  const [newGenre, setNewGenre] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();

    getGenres();

    if (imageUrl) {
      form.setValue('imageUrl', imageUrl)
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
    defaultValues: {
      title: '',
      genreId: '',
      imageUrl: '',
      content: ''
    },
  })

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    await addGame(data);
    navigate('/games');

  }

  return (
    <MainLayout>
      <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">

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
              <div className="w-1/3">
                <img className="mx-auto object-cover h-80 w-52 border p-1" src={form.getValues('imageUrl')} />
              </div>
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
  imageUrl: selectImageGameUrl(state),
  genres: selectGenres(state),
  notification: selectNotification(state)
});

const mapDispatchToProps = {
  getGenres: getGenresRequest,
  addGame: addGameRequest,
  uploadImageGame: uploadImageGameRequest,
  addGenre: addGenreRequest,
  deleteGenre: deleteGenreRequest
};

const GameNewContainer = connect(mapStateToProps, mapDispatchToProps)(GameNewComponent);
export default GameNewContainer;