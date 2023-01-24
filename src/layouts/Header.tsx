import { Component } from "react"
import { Container, Navbar, Image } from "react-bootstrap"
import logo from "public/logo.png"
import styles from "src/styles/Header.module.css"

class Header extends Component<{}, { showMenu: boolean }> {
  constructor(props: {} | Readonly<{}>) {
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
    return (
      <>
        <Navbar collapseOnSelect expand="lg" className={styles.navbar}>
          <Container fluid className={styles.logoSection}>
            <Navbar.Brand href="/" className="d-flex align-items-center" color="#0d1321">
              <Image
                src={`${logo.src}`}
                alt="Rockin Readers Logo"
                width="80px"
                height="80px"
                className="d-inline-block align-top"
                roundedCircle={true}
              />
              <span className={styles.spacer}></span>Rockin Readers
            </Navbar.Brand>
            <div className={styles.triangle}></div>
          </Container>
          <Container fluid className={styles.bookmark}>
            <h1>Excuse our book-dust!</h1>
            <p>A new Rockin Readers is coming soon</p>
          </Container>
        </Navbar>
      </>
    )
  }
}

export default Header