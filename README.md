# 🧩 Pokémon Web – React Project

## 📌 Ringkasan Proyek

Proyek ini adalah implementasi UI pengguna berbasis **React** yang menampilkan data Pokémon dalam dua mode tampilan: **grid view** dan **list view**, sesuai dengan desain dari **Figma**. Aplikasi menggunakan React functional components dan memanfaatkan React Hooks seperti `useState` untuk manajemen tampilan, pencarian, dan filtering data.

---

## 🎯 Tujuan Pengerjaan

-   Melatih kemampuan slicing desain UI dari Figma ke dalam komponen React.
-   Membangun logika tampilan dinamis (grid vs list).
-   Menerapkan fitur pencarian Pokémon secara real-time.
-   Mengelola dan menampilkan data dummy menggunakan format JSON

---

## 🛠️ Langkah Pengerjaan

### 1. Slicing Desain dari Figma

Elemen-elemen dari desain UI dipecah menjadi beberapa komponen:

-   `Navbar`
-   `Card` (untuk tampilan grid)
-   `ListCard` (untuk tampilan list)
-   `SortView` (opsional untuk fitur tambahan filter/sort)

### 2. Pembuatan Data Dummy

Data dummy disimpan dalam file `pokemonData.js` sebagai array of objects, contoh:

```js
{
  id: 1001,
  name: "Bulbasaur",
  type: "Grass",
  attack: 49,
  defense: 49,
  currentHealth: 450,
  maxHealth: 600,
  image: "/assets/images/bulbasaur_pokemon.png",
}

```

## 3. Penerapan React Hooks

`useState` digunakan untuk:

-   Menyimpan status tampilan: `grid` atau `list`.

-   Mengelola nilai input pencarian (`searchTerm`).

-   Menyaring data Pokémon berdasarkan pencarian.

## 4. Implementasi Tampilan Dinamis

Komponen Card disesuaikan untuk mendukung dua mode tampilan:

-   `Grid View`: Tampilan compact, berfokus pada gambar dan tipe Pokémon.

-   `List View`: Tampilan horizontal dengan informasi lebih detail seperti HP, Attack, Defense.

## 5. Fitur Pencarian

-   Fitur pencarian di-trigger dari komponen `Navbar`.

-   Pokémon difilter secara real-time berdasarkan nama.
