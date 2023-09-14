import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Album from "../../lib/album/model";
import { getAlbumById } from "../../lib/album/service";

const AlbumPage = () => {
  const { albumId } = useParams<string>();

  const [album, setAlbum] = useState<Album>();

  useEffect(() => {
    if (album) return;
    updateAlbum(albumId);
  }, [albumId, album]);

  const updateAlbum = async (albumId?: string) => {
    if (albumId) {
      const album: Album = await getAlbumById(albumId);
      setAlbum(album);
    }
  };

  return (
    <div>
      <h1>Album page</h1>

      <div>{album?.name}</div>
      <div>{album?.name}</div>
      <div>{album?.band.image}</div>
    </div>
  );
};

export default AlbumPage;
