import styles from './header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Header() {
    return (
        <header className={styles.header}>
        <div className="contact" id="section3">
                <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className={styles.logo}>
                            <a href="./index.html"><img className={styles.logoimg} src="images/otterbaby.png" alt="logo" /></a>
                        </div>
                    </div>
                    <div className={styles.back}>
                        <div className="col-md-12">
                            <div>
                                <p className={styles.sign}>Log in</p>
                            </div>
                        </div>
                        <div className={styles.form}>
                            <div>
                                <p className={styles.title3}>Email</p>
                            </div>
                            <div className={styles.enter}>
                                <input type="text" placeholder="Enter your email" />
                            </div>
                            <div>
                                <p className={styles.title4}>Password</p>
                            </div>
                            <div>
                                <input type="text" placeholder="Enter your password" />
                            </div>
                            <hr className={styles.titleline} />
                            <div className="row">
                                <div className="col-md-6 text-center">
                                    <div className={styles.squareRemeber}>
                                        <img className={styles.square} src="./images/square.png" />
                                        <p className={styles.Remeber}>Remeber Me</p>
                                    </div>
                                </div>
                                <div className="col-md-6 text-center">
                                    <a className={styles.Remeber} href="#">Forgot Password?</a>
                                </div>
                            </div>
                            <div className="text-center"><input type="submit" value="Login" /></div>
                            <div className="row">
                                <div className="col-md-4 ">
                                    <hr className={styles.title2line} />
                                </div>
                                <div className="col-md-4 text-center">
                                    <p className={styles.Continue}> Continue With</p>
                                </div>
                                <div className="col-md-4 ">
                                    <hr className={styles.title2line} />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class={styles.socialmedia}>
                                <a href="https://accounts.google.com/" target="_blank"><img className="media-icon"
                                    src="images/chrome.png" alt="ig" /></a>
                                <a href="https://www.facebook.com/" target="_blank"><img className="media-icon"
                                    src="images/fb.png" alt="fb" /></a>
                            </div>
                        </div>
                        <p className="dont">Don’t have an account? </p>
                        <a className="Sign" href="#">Sign Up</a>
                        <div className="last"></div>
                    </div>
                </div>
                </div>
        </div >
            </header >
    );
}