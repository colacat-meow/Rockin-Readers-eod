import { Component } from "react"
import { Container, Navbar, Image } from "react-bootstrap"
import Link from "next/link"
import logo from "public/logo.png"
import styles from "src/styles/Header.module.scss"
import withWidthHOC from "@/hooks/withWidthHOC"

class Header extends Component<{ width: number }, { showMenu: boolean }> {
  constructor(props: { width: number } | Readonly<{ width: number }>) {
    super(props)
    this.state = {
      showMenu: false,
    }
  }

  toggleMenu = () => {
    this.setState({
    showMenu: !this.state.showMenu,
    })
  }

  render() {
    const menuStyles = [styles.hamburger]
    if (this.state.showMenu) {
      menuStyles.push(styles.toggle)
    }
    if (this.props.width >= 1200) {
      return (
        <>
          <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
            <Container fluid className={styles.logoSectionLarge}>
              <Navbar.Brand href="/" className="d-flex align-items-center" color="#0d1321">
                <Image
                  src={`${logo.src}`}
                  alt="Rockin Readers Logo"
                  width="80px"
                  height="80px"
                  className="d-inline-block"
                  roundedCircle={true}
                />
                <span className={styles.spacer}></span><h1>Rockin Readers</h1>
              </Navbar.Brand>
              <div className={styles.triangleLarge}></div>
            </Container>
            <Container className={styles.bookmarkLarge}>
              <h2>Excuse our book-dust!</h2>
              <p>A new Rockin Readers is coming soon</p>
            </Container>
            <Container className={styles.contact}>
              <Link href="mailto:contact@rockinreaders.com">
                Contact Us
              </Link>
            </Container>
          </Navbar>
        </>
      )
    } else {
      return (
        <>
          <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
            <Container fluid className={styles.logoSectionSmall}>
              <Navbar.Brand href="/" className="d-flex align-items-center" color="#0d1321">
                <Image
                  src={`${logo.src}`}
                  alt="Rockin Readers Logo"
                  width="80px"
                  height="80px"
                  className="d-inline-block"
                  roundedCircle={true}
                />
              </Navbar.Brand>
              <div className={styles.triangleSmall}></div>
            </Container>
            <Container className={styles.bookmarkSmall}>
              <h2>Excuse our book-dust!</h2>
              <p>A new Rockin Readers is coming soon</p>
            </Container>
          </Navbar>
        </>
      )
    }
  }
}

export default withWidthHOC(Header)