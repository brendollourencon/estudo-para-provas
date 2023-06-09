const styles = {
  footer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60px",
    backgroundColor: "#f0f0f0",
    width: "100%",
    marginTop: "30px",
  },
};

function Footer() {
  return (
    <div style={styles.footer}>
      Brendol Lourençon - Todos os direitos reservados
    </div>
  );
}

export default Footer;
