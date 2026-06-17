-- Buat tabel jika belum ada
CREATE TABLE IF NOT EXISTS `SiteContent` (
  `id` INT NOT NULL DEFAULT 1,
  
  -- Bagian Homepage (Hero)
  `homeHeroTitle` VARCHAR(255) NOT NULL DEFAULT 'Wujudkan Rumah Impian di Perumahan Nyarong Mandiri',
  `homeHeroDesc` TEXT NOT NULL,
  `homeHeroImg` VARCHAR(255) NOT NULL DEFAULT '/image/fotoRumahHero.jpeg',
  
  -- Bagian Homepage (Keunggulan)
  `homeAboutTitle` VARCHAR(255) NOT NULL DEFAULT 'Keunggulan Kami',
  `homeAboutSub` TEXT NOT NULL,
  `aboutCard1Title` VARCHAR(255) NOT NULL DEFAULT 'Konsep Ramah Lingkungan',
  `aboutCard1Desc` TEXT NOT NULL,
  `aboutCard2Title` VARCHAR(255) NOT NULL DEFAULT 'Keamanan Terjamin',
  `aboutCard2Desc` TEXT NOT NULL,
  `aboutCard3Title` VARCHAR(255) NOT NULL DEFAULT 'Harga Terjangkau',
  `aboutCard3Desc` TEXT NOT NULL,
  `aboutCard4Title` VARCHAR(255) NOT NULL DEFAULT 'Kemitraan Bank Luas',
  `aboutCard4Desc` TEXT NOT NULL,
  
  -- Bagian Homepage (Type 36)
  `idealTypeLabel` VARCHAR(255) NOT NULL DEFAULT 'Type 36/90',
  `idealTitle` VARCHAR(255) NOT NULL DEFAULT 'Hunian Ideal: Type 36',
  `idealDesc` TEXT NOT NULL,
  `idealBed` VARCHAR(255) NOT NULL DEFAULT '2 Kamar Tidur',
  `idealLiving` VARCHAR(255) NOT NULL DEFAULT '1 Ruang Tamu',
  `idealCarport` VARCHAR(255) NOT NULL DEFAULT '1 Carport',
  `idealArea` VARCHAR(255) NOT NULL DEFAULT 'Luas Tanah 90m²',
  `idealInfo` TEXT NOT NULL,
  `idealImage` VARCHAR(255) NOT NULL DEFAULT '/image/fotoRumahNyaong.jpeg',
  
  -- Bagian Product Page (Hero & Specs)
  `prodHeroTitle` VARCHAR(255) NOT NULL DEFAULT 'Rumah Type 36',
  `prodHeroSub` VARCHAR(255) NOT NULL DEFAULT 'Kompleks Perumahan Nyarong Mandiri',
  `prodHeroDesc` TEXT NOT NULL,
  `prodSpecArea` VARCHAR(255) NOT NULL DEFAULT '± 198 m2',
  `prodSpecLoc` VARCHAR(255) NOT NULL DEFAULT 'Desa Kuala Dua',
  `prodSpecSt` VARCHAR(255) NOT NULL DEFAULT 'Jln. Sumber Maju',
  
  -- Bagian Product Page (Images)
  `prodHeroImg` VARCHAR(255) NOT NULL DEFAULT '/image/product_hero.png',
  `prodSideImg` VARCHAR(255) NOT NULL DEFAULT '/image/product_side.png',
  `prodSitePlanImg` VARCHAR(255) NOT NULL DEFAULT '/image/product_siteplan.png',
  
  -- Bagian Product Page (Visualisasi)
  `prodVis1Img` VARCHAR(255) NOT NULL DEFAULT '/image/product_vis_1.png',
  `prodVis1Title` VARCHAR(255) NOT NULL DEFAULT 'Kualitas Bangunan',
  `prodVis1Desc` TEXT NOT NULL,
  
  `prodVis2Img` VARCHAR(255) NOT NULL DEFAULT '/image/product_vis_2.png',
  `prodVis2Title` VARCHAR(255) NOT NULL DEFAULT 'Lingkungan Asri',
  `prodVis2Desc` TEXT NOT NULL,
  
  `prodVis3Img` VARCHAR(255) NOT NULL DEFAULT '/image/product_vis_3.png',
  `prodVis3Title` VARCHAR(255) NOT NULL DEFAULT 'Tata Kelola Lahan',
  `prodVis3Desc` TEXT NOT NULL,
  
  `updatedAt` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Masukkan data awal (default content) jika masih kosong
INSERT INTO `SiteContent` (
  `id`, 
  `homeHeroDesc`,
  `homeAboutSub`,
  `aboutCard1Desc`,
  `aboutCard2Desc`,
  `aboutCard3Desc`,
  `aboutCard4Desc`,
  `idealDesc`, 
  `idealInfo`, 
  `prodHeroDesc`, 
  `prodVis1Desc`, 
  `prodVis2Desc`, 
  `prodVis3Desc`
) VALUES (
  1,
  'Rencanakan masa depan Anda dengan hunian asri dan nyaman dengan lingkungan yang menenangkan. Kami siap membantu wujudkan hunian impian Anda.',
  'Dapatkan kenyamanan dan harga terjangkau. Temukan rumah impian Anda bersama kami tanpa keraguan finansial.',
  'Desain yang menyatu dengan alam. Menghadirkan keseimbangan terbaik antara hunian dan alam sekitar untuk kenyamanan optimal.',
  'Sistem keamanan 24 Jam dengan CCTV yang ketat menjaga rumah Anda dengan pasti.',
  'Mulai dari tipe termurah, dapatkan hunian impian dengan kemudahan pembayaran.',
  'Bekerja sama dengan berbagai Bank ternama untuk memudahkan proses persetujuan dan mencairkan dana.',
  'Menawarkan hunian minimalis dan nyaman dan ruang luar dengan tata ruang yang dirancang khusus untuk kenyamanan dan privasi Anda dan keluarga.',
  'Terdapat sisa tanah di bagian depan dan belakang yang dapat dimanfaatkan untuk taman atau perluasan bangunan.',
  'Rumah Type 36 di Perumahan Nyarong Mandiri menawarkan keseimbangan sempurna antara fungsionalitas hunian modern dan keasrian alam. Dirancang dengan konsep "Organic Professionalism", unit ini memaksimalkan sirkulasi udara dan pencahayaan alami, menciptakan suasana tenang yang ideal untuk keluarga muda maupun investasi jangka panjang.',
  'Material pilihan untuk daya tahan dan estetika maksimal.',
  'Kawasan hijau yang dirancang untuk kenyamanan keluarga.',
  'Perencanaan wilayah yang efisien dan tertata rapi.'
) ON DUPLICATE KEY UPDATE `id`=`id`;
