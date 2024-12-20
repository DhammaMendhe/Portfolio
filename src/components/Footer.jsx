import React from "react";

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* Social Links */}
        <div style={styles.socialLinks}>
          <a href="https://github.com/dhammadip" target="_blank" rel="noopener noreferrer" style={styles.link}>
            GitHub
          </a>
          <a href="https://linkedin.com/in/dhammadip" target="_blank" rel="noopener noreferrer" style={styles.link}>
            LinkedIn
          </a>
          <a href="mailto:dhammadip@example.com" style={styles.link}>
            Email
          </a>
        </div>

        {/* Footer Text */}
        <p style={styles.text}>
          © {new Date().getFullYear()} Dhammadip Santosh Mendhe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// Styles
const styles = {
  footer: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px 10px",
    textAlign: "center",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  socialLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginBottom: "10px",
  },
  link: {
    color: "#00aaff",
    textDecoration: "none",
    fontWeight: "bold",
  },
  text: {
    fontSize: "14px",
    margin: 0,
  },
};

export default Footer;
