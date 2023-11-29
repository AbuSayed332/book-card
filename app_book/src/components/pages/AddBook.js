import { useState } from 'react';
import { useAddBooksMutation } from '../../features/api/apiSlice';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import TextInput from '../TextInput';
import InputPrice from './../InputPrice';


export default function AddBook() {
  const [addBooks, { isLoading, isSuccess, isError }] = useAddBooksMutation();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState(0);
  const [featured, setFeatured] = useState(false);

  const resetbook = () => {
    setAuthor(" ");
    setName(" ");
    setPrice(" ");
    setThumbnail(" ");
    setRating(" ");
    setFeatured("");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addBooks({
      name,
      author,
      thumbnail,
      featured,
      price:Number(price),
      rating:Number(rating),
      
    });
    resetbook();

  }
  return (
    <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
      <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
      <Form onSubmit={handleSubmit}>
        <TextInput
          className="space-y-2"
          type="text"
          id="lws-bookName"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          text="Book Name"
        />
        <TextInput
          className="space-y-2"
          type="text"
          id="lws-author"
          name="author"
          text="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <TextInput
          className="space-y-2"
          type="text"
          id="lws-thumbnail"
          name="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          text="Image Url"
        />
        <InputPrice>
          <TextInput
            className="space-y-2"
            type="number"
            id="lws-price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            text="Price"
          />
          <TextInput
            className="space-y-2"
            type="number"
            id="lws-rating"
            name="rating"
            min="1"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            text="Rating"
          />
        </InputPrice>

        <Checkbox
          value={featured}
          onChange={(e) => setFeatured(e.target.value? true:false)}
        />
        <Button
          type="submit"
          className="submit"
          id="lws-submit"
          disabled={isLoading}
        >
          Add Book
        </Button>
      </Form>
      {isSuccess && <div>Submited Success </div>}
      {isError && <div> There was an submiting error!</div>}
    </div>
  );
}

