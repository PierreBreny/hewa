import Navbar from 'react-bootstrap/Navbar';

const Nav = () => {
    return (
        <div>
            <>
  <Navbar bg="light">
    <Navbar.Container>
      <Navbar.Brand href="#home">Brand link</Navbar.Brand>
    </Navbar.Container>
  </Navbar>
  <br />
  <Navbar bg="light">
    <Navbar.Container>
      <Navbar.Brand>Brand text</Navbar.Brand>
    </Navbar.Container>
  </Navbar>
  <br />
  <Navbar bg="dark">
  <Navbar.Container>
    <Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  </Navbar.Container>
  </Navbar>
  <br />
  <Navbar bg="dark" variant="dark">
    <Navbar.Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
    </Navbar.Container>
  </Navbar>
</>
        </div>
    )
}

export default Nav