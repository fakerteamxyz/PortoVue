<template>
    <div class="work view-page">
        <div class="text">
            <h1 class="title">
                <div class="outline-text">Projects</div>
                <span class="hov">M</span>
                <span class="hov">y</span>
                <span class="space"></span>
                <span class="hov">p</span>
                <span class="hov">r</span>
                <span class="hov">o</span>
                <span class="hov">j</span>
                <span class="hov">e</span>
                <span class="hov">c</span>
                <span class="hov">t</span>
                <span class="hov">s</span>
            </h1>
        </div>

        <div class="work-list">
            <div class="work" v-for="(work, index) in myProjects" :key="index">
                <div class="information">
                    <h2 class="work-number">0{{ index + 1 }}.</h2>
                    <h1 class="work-title">
                        {{ work.title }}
                    </h1>
                    <img
                        :src="getImage(work.img)"
                        :alt="work.title + ' project screenshot'"
                        class="mobile-img"
                    />
                    <p class="description">
                        {{ work.description }}
                    </p>
                    <div class="tools">
                        <p>
                            Code Tools:
                            <span>{{ work.codeTools.join(', ') }}</span>
                        </p>
                        <p class="design">
                            Design: <span>{{ work.design }}</span>
                        </p>
                    </div>
                    <div class="links">
                        <a
                            target="_blank"
                            class="btn"
                            :href="work.link"
                            :class="work.link === '' ? 'disabled' : ''"
                            >Visit</a
                        >
                        <a
                            target="_blank"
                            class="btn"
                            :href="work.source"
                            :class="work.source === '' ? 'disabled' : ''"
                            >Source Code</a
                        >
                        <button class="btn btn-detail" @click="openDetail(work)">Detail</button>
                    </div>
                </div>
                <div class="img">
                    <img :src="getImage(work.img)" :alt="work.title + ' project screenshot'" />
                </div>
            </div>
        </div>

        <Transition name="detail">
            <div v-if="showDetail && selectedProject" class="detail-overlay" @click.self="closeDetail">
                <div class="detail-card">
                    <div class="close-btn" @click="closeDetail">
                        <i class="fas fa-times"></i>
                    </div>
                    <div class="detail-hero">
                        <img :src="getImage(selectedProject.img)" :alt="selectedProject.title" />
                    </div>
                    <div class="detail-content">
                        <h1 class="detail-title">{{ selectedProject.title }}</h1>

                        <div class="detail-meta">
                            <div class="detail-timeline">
                                <i class="fas fa-calendar-alt"></i>
                                <span>{{ selectedProject.timeline }}</span>
                            </div>
                        </div>

                        <div class="detail-section">
                            <p class="detail-description">{{ selectedProject.detailDescription }}</p>
                        </div>

                        <div class="detail-section">
                            <h3 class="section-title">Tech Stack</h3>
                            <div class="tech-stack">
                                <span
                                    v-for="tech in selectedProject.technologies"
                                    :key="tech"
                                    class="tech-badge"
                                >{{ tech }}</span>
                            </div>
                        </div>

                        <div class="detail-section">
                            <h3 class="section-title">Fitur Utama</h3>
                            <ul class="feature-list">
                                <li v-for="(feature, i) in selectedProject.features" :key="i">
                                    <i class="fas fa-check-circle"></i>
                                    <span>{{ feature }}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="detail-section">
                            <h3 class="section-title">Alur Pengerjaan</h3>
                            <div class="workflow-steps">
                                <div v-for="(step, i) in selectedProject.workflow" :key="i" class="workflow-step">
                                    <div class="step-marker">
                                        <div class="step-number">{{ i + 1 }}</div>
                                        <div v-if="i < selectedProject.workflow.length - 1" class="step-line"></div>
                                    </div>
                                    <div class="step-content">{{ step }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="detail-footer">
                            <a
                                target="_blank"
                                class="btn"
                                :href="selectedProject.link"
                                :class="selectedProject.link === '' ? 'disabled' : ''"
                            >Visit</a>
                            <a
                                target="_blank"
                                class="btn"
                                :href="selectedProject.source"
                                :class="selectedProject.source === '' ? 'disabled' : ''"
                            >Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import lapanganFutsal from '../assets/lapangan-futsal.jpg'
import fakertype from '../assets/fakertype.png'
import sman1 from '../assets/sman1_new.png'
import sibarakat from '../assets/sibarakat.png'
import arekLungga from '../assets/arek_lungga.png'

const imageMap: Record<string, string> = {
  'lapangan-futsal.jpg': lapanganFutsal,
  'fakertype.png': fakertype,
  'sman1_new.png': sman1,
  'sibarakat.png': sibarakat,
  'arek_lungga.png': arekLungga
}

function getImage(name: string): string {
  return imageMap[name] || ''
}

interface Project {
    title: string
    description: string
    detailDescription: string
    source: string
    link: string
    img: string
    codeTools: string[]
    design: string
    features: string[]
    timeline: string
    workflow: string[]
    technologies: string[]
}

const selectedProject = ref<Project | null>(null)
const showDetail = ref(false)

function openDetail(project: Project) {
    selectedProject.value = project
    showDetail.value = true
    document.body.style.overflow = 'hidden'
}

function closeDetail() {
    showDetail.value = false
    document.body.style.overflow = ''
}

function onKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') closeDetail()
}

onMounted(() => {
    window.addEventListener('keydown', onKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', onKeydown)
    document.body.style.overflow = ''
})

const myProjects: Project[] = [
    {
        title: 'Web  Sewa lapangan Futsal',
        description:
            'The Futsal Field Rental Website is a digital platform designed to make it easier for users to order futsal fields online. Through this website, users can see schedule availability, choose playing hours, and make reservations without having to come directly to the location.',
        detailDescription:
            'Web Sewa Lapangan Futsal adalah platform digital yang dikembangkan untuk memudahkan pengguna dalam melakukan pemesanan lapangan futsal secara online. Sistem ini dilengkapi dengan fitur jadwal real-time yang menampilkan ketersediaan lapangan, sehingga pengguna dapat melihat langsung slot waktu yang kosong tanpa harus menghubungi pengelola. Proses pemesanan dimulai dari pemilihan lapangan, pemilihan tanggal dan jam, hingga konfirmasi booking yang otomatis terkirim. Dari sisi admin, tersedia panel manajemen untuk mengelola jadwal, memverifikasi pemesanan, dan mengatur data lapangan serta harga. Website ini dibangun dengan arsitektur sederhana menggunakan PHP Native dan MySQL, dengan tampilan responsif yang dioptimasi untuk berbagai perangkat. Sistem autentikasi membedakan akses antara pengguna biasa dan admin, sehingga keamanan data terjaga.',
        source:
            'https://github.com/fakerteamxyz/Sewa-Lapangan-Futsal/',
        link: 'https://github.com/fakerteamxyz/Sewa-Lapangan-Futsal/',
        img: 'lapangan-futsal.jpg',
        codeTools: ['Php Native'],
        design: 'Design by Me with Figma',
        features: [
            'Jadwal booking online real-time',
            'Pemilihan lapangan & jam sewa',
            'Informasi harga & fasilitas lengkap',
            'Manajemen admin untuk kelola booking',
            'Konfirmasi pemesanan otomatis',
            'Riwayat pemesanan pengguna',
        ],
        timeline: '3 Minggu (Juni 2024)',
        workflow: [
            'Analisis kebutuhan & riset sistem booking',
            'Perancangan database & arsitektur sistem',
            'Pembuatan sistem autentikasi pengguna',
            'Pengembangan modul booking & jadwal',
            'Pembuatan admin panel manajemen',
            'Pengujian sistem & bug fixing',
            'Deployment & maintenance',
        ],
        technologies: ['PHP Native', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
        title: 'FakerType',
        description:
            'Fakertype is an automatic writing website specifically designed to help those of you who are lazy about writing manually on paper. With a simple and easy-to-use display, Fakertype allows users to type directly digitally and print the results, without having to get tired of handwriting.',
        detailDescription:
            'FakerType adalah website auto-typing yang dirancang khusus untuk membantu pengguna yang malas menulis manual di kertas. Dengan antarmuka yang simpel dan mudah digunakan, FakerType memungkinkan pengguna mengetik langsung secara digital dan mencetak hasilnya tanpa perlu repot menulis tangan. Konsepnya sangat sederhana: pengguna cukup membuka website, mulai mengetik, dan hasil tulisan bisa langsung dicetak dalam format yang rapi. Tidak perlu registrasi atau login — cukup buka dan gunakan. Website ini sangat cocok untuk situasi darurat ketika pengguna membutuhkan dokumen cetak cepat tetapi tidak memiliki akses ke Microsoft Word atau Google Docs. FakerType dibangun dengan fokus pada kecepatan loading, kemudahan penggunaan, dan fungsionalitas print yang reliable.',
        source:
            'https://github.com/fakerteamxyz/Fakertype',
        link:
            'https://fakertype.vercel.app/',
        img: 'fakertype.png',
        codeTools: ['Javascript', 'boostraps'],
        design: 'Design by Me',
        features: [
            'Auto-typing digital instan',
            'Print langsung dari browser',
            'Antarmuka simpel & mudah digunakan',
            'Tanpa perlu registrasi atau login',
            'Responsive di semua perangkat',
        ],
        timeline: '1 Minggu (Maret 2024)',
        workflow: [
            'Riset kebutuhan & preferensi user',
            'Perancangan UI/UX sederhana & intuitif',
            'Development engine auto-typing',
            'Integrasi fungsi print',
            'Pengembangan responsive layout',
            'Testing & deployment ke Vercel',
        ],
        technologies: ['JavaScript', 'Bootstrap', 'HTML5', 'CSS3'],
    },
    {
        title: 'Sistem Informasi SMAN 1 Lareh Sago Halaban',
        description:
            'School Information System to support transparency, ease of data access, and the best service for students, teachers, and the community.',
        detailDescription:
            'Sistem Informasi SMAN 1 Lareh Sago Halaban adalah platform digital komprehensif yang dibangun untuk mendukung transparansi, kemudahan akses data, dan pelayanan terbaik bagi siswa, guru, dan masyarakat. Sistem ini mencakup berbagai modul utama: profil sekolah lengkap dengan visi-misi dan struktur organisasi, informasi akademik dan kurikulum, pengumuman dan berita sekolah terkini, serta galeri kegiatan. Dari sisi pengelola, terdapat Content Management System (CMS) yang memudahkan admin sekolah dalam memperbarui konten website secara mandiri tanpa perlu keahlian teknis. Website ini menggunakan Laravel 10 sebagai framework utama dengan arsitektur MVC yang terstruktur, sehingga memudahkan pengembangan fitur baru di masa mendatang. Proses pengembangan melibatkan koordinasi langsung dengan pihak sekolah untuk memastikan kebutuhan terpenuhi, termasuk sesi User Acceptance Testing (UAT) sebelum deployment.',
        source: '',
        link: 'https://sman1larehsagohalaban.sch.id/',
        img: 'sman1_new.png',
        codeTools: ['Laravel 10'],
        design: 'Design by Me',
        features: [
            'Manajemen data siswa & guru',
            'Informasi akademik & kurikulum',
            'Pengumuman & berita sekolah',
            'Galeri kegiatan sekolah',
            'Profil sekolah & kontak',
            'Halaman publik & admin panel CMS',
        ],
        timeline: '2 Bulan (Januari - Februari 2024)',
        workflow: [
            'Analisis kebutuhan sekolah & wawancara stakeholder',
            'Perancangan database & arsitektur sistem',
            'Pengembangan modul admin & CMS',
            'Pengembangan halaman publik',
            'Integrasi fitur & konten',
            'User Acceptance Testing dengan pihak sekolah',
            'Deployment & pelatihan admin sekolah',
        ],
        technologies: ['Laravel 10', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
        title: 'Web UPTD DINAS BPSBTPH SUMATERA BARAT',
        description:
            'Sistem Informasi UPTD DINAS BPSBTPH SUMATERA BARAT.',
        detailDescription:
            'Web UPTD DINAS BPSBTPH Sumatera Barat adalah sistem informasi instansi pemerintah yang dibangun untuk menyediakan informasi lengkap mengenai profil instansi, layanan publik, berita dan artikel terkini, serta galeri dokumentasi. Website ini berfungsi sebagai portal informasi utama bagi masyarakat yang ingin mengetahui layanan-layanan yang disediakan oleh UPTD DINAS BPSBTPH. Dilengkapi dengan CMS (Content Management System) yang memudahkan admin instansi dalam mengelola dan memperbarui konten secara mandiri. Tampilan website dirancang profesional dan informatif sesuai dengan standar website pemerintah, dengan navigasi yang jelas dan struktur informasi yang terorganisir dengan baik. Setiap halaman dioptimasi untuk kecepatan akses dan kemudahan pengguna dalam menemukan informasi yang dibutuhkan.',
        source: '',
        link: 'https://sibarakat.aksipangkat.com/',
        img: 'sibarakat.png',
        codeTools: ['Web Technologies'],
        design: 'Design by Me',
        features: [
            'Profil instansi & visi-misi',
            'Informasi layanan publik',
            'Berita & artikel terkini',
            'Galeri foto dokumentasi',
            'Kontak & lokasi instansi',
            'CMS untuk kelola konten mandiri',
        ],
        timeline: '1 Bulan (Maret 2024)',
        workflow: [
            'Analisis kebutuhan instansi pemerintah',
            'Design UI profesional & informatif',
            'Development sistem CMS',
            'Integrasi konten & data instansi',
            'Testing & revisi sesuai masukan',
            'Deployment & go-live',
        ],
        technologies: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
        title: 'Arek Lungga',
        description: 'Website event seni Arek Lungga.',
        detailDescription:
            'Arek Lungga adalah website event seni yang dibangun untuk mempromosikan dan menginformasikan berbagai kegiatan seni kepada publik. Website ini menampilkan informasi lengkap mengenai jadwal acara, jenis pertunjukan seni, lineup pengisi acara, dan galeri dokumentasi dari setiap event yang telah berlangsung. Tampilan website dirancang modern, artistik, dan engaging untuk mencerminkan semangat seni dan kreativitas. Pengunjung dapat melihat jadwal acara mendatang, menelusuri galeri foto dan video dari pertunjukan sebelumnya, serta mendapatkan informasi tiket dan lokasi acara.',
        source: '',
        link: 'https://areklungga.monoframe.id/',
        img: 'arek_lungga.png',
        codeTools: ['Web Technologies'],
        design: 'Design by Me',
        features: [
            'Informasi jadwal & lineup acara',
            'Galeri foto & video dokumentasi',
            'Profil event & jenis pertunjukan',
            'Informasi tiket & lokasi',
            'Kontak & media sosial',
        ],
        timeline: '2 Minggu (April 2024)',
        workflow: [
            'Konsep & perancangan tampilan artistik',
            'Development halaman utama & jadwal event',
            'Integrasi galeri foto & video',
            'Testing & optimasi performa',
            'Deployment & publikasi',
        ],
        technologies: ['Bootstrap', 'JavaScript', 'CSS3', 'HTML5'],
    },
]
</script>

<style scoped src="../styles/work.css"></style>
