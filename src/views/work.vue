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
                        :src="require(`@/assets/${work.img}`)"
                        alt=""
                        class="mobile-img"
                    />
                    <p class="description">
                        {{ work.description }}
                    </p>
                    <div class="tools">
                        <p>
                            Code Tools:
                            <span>{{ work.codeTools.join(", ") }}</span>
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
                    </div>
                </div>
                <div class="img">
                    <img :src="require(`@/assets/${work.img}`)" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isExpand: false,
            icon: "fas fa-expand",
            isDetail: false,
            myProjects: [
                {
                    title: "Web  Sewa lapangan Futsal",
                    description:
                        "The Futsal Field Rental Website is a digital platform designed to make it easier for users to order futsal fields online. Through this website, users can see schedule availability, choose playing hours, and make reservations without having to come directly to the location. This website also provides complete information regarding field facilities, rental prices, location and usage rules.",
                    source:
                        "https://github.com/fakerteamxyz/Sewa-Lapangan-Futsal/",
                    link: "https://github.com/fakerteamxyz/Sewa-Lapangan-Futsal/",
                    img: "lapangan-futsal.jpg",
                    codeTools: ["Php Native"],
                    design: "Design by Me with Figma",
                },
                {
                    title: "FakerType",
                    description:
                        "Fakertype is an automatic writing website specifically designed to help those of you who are lazy about writing manually on paper. With a simple and easy-to-use display, Fakertype allows users to type directly digitally and print the results, without having to get tired of handwriting.",
                    source:
                        "https://github.com/fakerteamxyz/Fakertype",
                    link:
                        "https://fakertype.vercel.app/",
                    img: "fakertype.png",
                    codeTools: ["Javascript", "boostraps"],
                    design: "Design by Me",
                },
                {
                    title: "Sistem Informasi SMAN 1 Lareh Sago Halaban",
                    description:
                        "School Information System to support transparency, ease of data access, and the best service for students, teachers, and the community.",
                    source: "",
                    link: "https://sman1larehsagohalaban.sch.id/",
                    img: "sman1_new.png",
                    codeTools: ["Laravel 10"],
                    design: "Design by Me",
                },
                {
                    title: "Web UPTD DINAS BPSBTPH SUMATERA BARAT",
                    description:
                        "Sistem Informasi UPTD DINAS BPSBTPH SUMATERA BARAT.",
                    source: "",
                    link: "https://sibarakat.aksipangkat.com/",
                    img: "sibarakat.png",
                    codeTools: ["Web Technologies"],
                    design: "Design by Me",
                },
                {
                    title: "Arek Lungga",
                    description: "Arek Lungga Website.",
                    source: "",
                    link: "https://areklungga.monoframe.id/",
                    img: "arek_lungga.png",
                    codeTools: ["Web Technologies"],
                    design: "Design by Me",
                },
            ],
        };
    },
    mounted() {},
    methods: {},
};
</script>

<style scoped src="../styles/work.css"></style>
