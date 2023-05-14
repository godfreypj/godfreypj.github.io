import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function PhotoGrid() {
  const photoData = [
    {
      img: '/assets/grid-photos/city.jpeg',
      title: 'skyline of manila',
    },
    {
      img: '/assets/grid-photos/fall.jpg',
      title: 'a pond in vermont in the fall',
    },
    {
      img: '/assets/grid-photos/flower.JPG',
      title: 'closeup of a sunflower',
    },
    {
      img: '/assets/grid-photos/korea.jpeg',
      title: 'a man walking down a graffitied street',
    },
    {
      img: '/assets/grid-photos/ocean.jpeg',
      title: 'black and white photo of main coastline',
    },
    {
      img: '/assets/grid-photos/winter.jpeg',
      title: 'sunset over a lake in winter',
    },
  ];
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {photoData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
