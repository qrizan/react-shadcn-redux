interface IImageGameProps { 
  imageUrl: string 
}

export default function ImageGame(props: IImageGameProps) {
  const { imageUrl } = props;

  return (
    <div className="w-1/3">
      <img className="mx-auto object-cover h-72 w-64 border p-1" src={imageUrl} />
    </div>    
  )

}