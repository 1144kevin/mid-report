import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './newnews.module.css';
import Link from "../Link";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Newnews() {
    const [isClicked, setClicked] = useState(false)
    const [isClicked2, setClicked2] = useState(false)
    const [isClicked3, setClicked3] = useState(false)
    const firstanimation = {
        visible: {
            opacity: 1,
            transition: {
                ease: 'easeInOut',
                delay: 0.9,
            }
        }
    }
    const typingContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.14,
            }
        }
    }
    const typingText = {
        hidden: { opacity: 0, y: "-20px" },
        show: {
            opacity: 1,
            y: "0",
            transition: {
                ease: 'easeInOut',
            }
        }
    }

    return (
        <div className={`container-fluid ${styles.tt}`} style={{ paddingLeft: "0", paddingRight: "0" }}>
            <div class="row" style={{ marginRight: "0" }}>
                <div class="col-lg-12" style={{ paddingLeft: "0", paddingRight: "0" }}>
                    <Link to="/">
                        <h1 className={styles.newsTitle}>
                            Official Trailer
                        </h1>
                    </Link>
                    <hr className={styles.hrHeaderLine} />
                </div>
            </div>

            <div class="row" style={{ display: "flex", justifyContent: "center", marginRight: "0" }}>
                <div class="col-lg-12"
                    style={{ marginBottom: "3rem" }}>
                    <div class="row"
                        style={{ display: "flex", justifyContent: "center", marginRight: "0", padding: "0.5rem 0" }}>
                        <div className={`col-lg-3 ${styles.word}`}>
                            <motion.h3
                                onClick={() => { setClicked(!isClicked) }}
                                variants={firstanimation} initial={{ opacity: "0" }} whileInView="visible"
                            >《那年，我們的夏天》</motion.h3>
                            <motion.div className={styles.originalword} variants={firstanimation} initial={{ opacity: "0" }} whileInView="visible" animate={isClicked ? { display: "none" } : { display: "flex" }}>點標題 看詳情</motion.div>
                            <motion.p variants={typingContainer} initial="hidden" animate={isClicked ? 'show' : 'hidden'}>
                                {
                                    Array.from("韓國SBS於2021年12月6日起播出的連續劇。由金允珍導演與李娜恩編劇共同創作。此劇講述曾經的全校第一與全校最後一名，因十年前高中拍攝的紀錄片「逆行」引發話題，讓兩人被迫再次站在鏡頭前，是部描述他們之間複雜微妙感情的喜劇").map((word, i) => (
                                        <motion.span key={i} variants={typingText}>{word}</motion.span>
                                    ))
                                }
                            </motion.p>
                        </div>
                        <div class="col-lg-4">
                            <motion.iframe width="450" height="300" src="https://www.youtube.com/embed/NpZeGngWyXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                variants={firstanimation} initial={{ opacity: "0" }} whileInView="visible"></motion.iframe>
                        </div>
                    </div>
                    <div class="row"
                        style={{ display: "flex", justifyContent: "center", marginRight: "0", padding: "0.5rem 0" }}>
                        <div class="col-lg-4">
                            <motion.iframe width="450" height="300" src="https://www.youtube.com/embed/pL9FrqLPB7s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                                variants={firstanimation} initial={{ opacity: "0" }} whileInView="visible"></motion.iframe>
                        </div>
                        <div className={`col-lg-3 ${styles.word}`}>
                            <motion.h3
                                onClick={() => { setClicked2(!isClicked2) }}
                                variants={firstanimation} initial={{ opacity: "0" }} whileInView="visible"
                            >《黑暗榮耀》</motion.h3>
                            <motion.div className={styles.originalword} variants={firstanimation} initial={{ opacity: "0" }} whileInView="visible" animate={isClicked2 ? { display: "none" } : { display: "flex" }}>點標題 看詳情</motion.div>
                            <motion.p variants={typingContainer} initial="hidden" animate={isClicked2 ? 'show' : 'hidden'}>
                                {
                                    Array.from("描述夢想成為建築師的文同珢在高中因被朴涎鎮、全宰寯等人霸凌而主動退學。數年後朴涎鎮當上氣象主播，還與上流人士河度領風光結婚生子，但就在孩子上小學，蟄伏多年的文同珢現身該校擔任孩子的班導師，並在朱如炡及姜賢南的協助下，開始對當年的霸凌者朴涎鎮等人進行徹底報復的故事").map((word, i) => (
                                        <motion.span key={i} variants={typingText}>{word}</motion.span>
                                    ))
                                }
                            </motion.p>
                        </div>
                    </div>
                    <div class="row"
                        style={{ display: "flex", justifyContent: "center", marginRight: "0", padding: "0.5rem 0" }}>
                        <div className={`col-lg-3 ${styles.word}`}>
                            <motion.h3
                                onClick={() => { setClicked3(!isClicked3) }}
                                variants={firstanimation} initial={{ opacity: "0" }} whileInView="visible"
                            >《星期三》</motion.h3>
                            <motion.div className={styles.originalword} variants={firstanimation} initial={{ opacity: "0" }} whileInView="visible" animate={isClicked3 ? { display: "none" } : { display: "flex" }}>點標題 看詳情</motion.div>
                            <motion.p variants={typingContainer} initial="hidden" animate={isClicked3 ? 'show' : 'hidden'}>
                                {
                                    Array.from("一部美國恐怖喜劇電視劇，星期三因幫弟弟報仇，而對惡霸惡作劇後遭原高中退學，轉學至奈落學院。在這裡除了學會與人相處的道理，更要學會掌握自己的幻視能力。然而在這學期除了要破解神秘的殺人案，更重要的是要解開奈落學院的過往").map((word, i) => (
                                        <motion.span key={i} variants={typingText}>{word}</motion.span>
                                    ))
                                }
                            </motion.p>
                        </div>
                        <div class="col-lg-4">
                            <motion.iframe width="450" height="300" src="https://www.youtube.com/embed/UIs1SZ-aMCc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen
                            variants={firstanimation} initial={{ opacity: "0" }} whileInView="visible"></motion.iframe>

                        </div>
                    </div>
                </div>

                <div class="row" style={{}}>
                    <div class="col-lg-12"
                        style={{ display: "flex", justifyContent: "center" }}>
                        <a href="https://www.youtube.com/@NetflixAsia/videos" style={{ textDecoration: "none" }}>
                            <button className={styles.button}>see more</button>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )

}