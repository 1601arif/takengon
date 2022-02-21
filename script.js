const wisata = [
    {
        nama: 'Danau Lut Tawar',
        deskripsi: 'ama yang unik dan membuat siapa saja ingin datang ke Danau Laut Tawar yang ada di Kota Takengon. Warga sekitar pun biasa menyebutnya dengan nama Danau Lut Tawar dimana keduanya merujuk satu destinasi yang sama.',
        urlGambar: './assets/danau.jpg'
    },
    {
        nama: 'Bur Telege',
        deskripsi: 'Untuk melihat keindahan Danau Laut Tawar dari ketinggian selain dari Burni Telong masih ada beberapa titik lainnya. Salah satunya adalah Bur Telege yang ada di Kampung Bale Bujang, Kecamatan Laut Tawar, Kabupaten Aceh Tengah,Berada diatas ketinggian 1.250 meter wisatawan diberi kebebasan memandang sejauh mungkin. Diatas ketinggian ini juga terdapat kafe yang suguhkan Kopi Gayo.',
        urlGambar: './assets/burtelege.jpeg'
    },
    {
        nama: 'Burni Telong',
        deskripsi: 'bagi wisatawan yang memiliki hobi hiking,tekengon juga memiliki sebuah gunung yang bakal diminati oleh para pendaki,dikarenakan keindahan dan kelestarian dari hutan gunung Burni telong ini masih sangat terjaga',
        urlGambar: './assets/Burni.jfif'
    },
    {
        nama: 'Air Terjun Mengaya',
        deskripsi: 'bukan hanya tentang gunung dan danau,ketika para wisatawan bekunjung ke takengon,mereka juga dapat merasakan salah satu keindahan alam lainnya yaitu air terjun mangaya ini,memiliki ketinggian 180 meter,objek wisata ini terletak di desa mangaya,kecamatan binta,butuh banyak tenaga untuk sampai ke destinsai ini,namun semua kelelahan yang dilewati akan langsung sirna ketika melihat keindahan dari air terjun ini dan alam disekitarnya.',
        urlGambar: './assets/terjun.jpg'
    }
];

const wisataContainer = document.querySelector('#wisata');
wisataContainer.innerHTML = '<h2>Wisata</h2><p>Wisata yang berada di daerah takengon ini lebih condong menampakkan alam yang masih terjaga,sudah bisa dipastikan bahwa wisata wisata yang berada di takengon ini sangatlah indah.</p>';

wisata.forEach(item => {
    wisataContainer.innerHTML += `
            <section>
                <h3>${item.nama}</h3>
                <img src =${item.urlGambar} class="featured-image" alt="Bur Telege">
                <p>${item.deskripsi}</p>
            </section>
    `;
});
