import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GenreAdmin = () => {
  const [genres, setGenres] = useState([]);
  const [newGenre, setNewGenre] = useState('');

  useEffect(() => {
    fetchGenres();
  }, []);

  const fetchGenres = async () => {
    try {
      const res = await axios.get('/api/genres');
      setGenres(res.data);
    } catch (err) {
      console.error('Gagal mengambil data genre', err);
    }
  };

  const handleAddGenre = async () => {
    if (!newGenre.trim()) return;

    try {
      await axios.post('/api/genres', { name: newGenre });
      setNewGenre('');
      fetchGenres(); // Refresh data
    } catch (err) {
      console.error('Gagal menambahkan genre', err);
    }
  };

  return (
    <div>
      <h2>Manajemen Genre</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama Genre</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre) => (
            <tr key={genre.id}>
              <td>{genre.id}</td>
              <td>{genre.name}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Tambah Genre Baru</h3>
      <input
        type="text"
        value={newGenre}
        onChange={(e) => setNewGenre(e.target.value)}
        placeholder="Nama Genre"
      />
      <button onClick={handleAddGenre}>Tambah</button>
    </div>
  );
};

export default GenreAdmin;
