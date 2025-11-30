module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // 🎨 PALETTE DE COULEURS
      colors: {
        background: "#FFFFFF",
        primary: "#667EEA",
        primaryDark: "#8271D7",
        secondary: "#764BA2",
        secondaryDark: "#8271D7",
        tertiary: "#000000",
        coral: "#FF7F7F",
        navy: "#000080"
      },

      // 🔤 TYPOGRAPHIE
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        raleway: ["Raleway", "sans-serif"]
      },

      // 🟦 RADIUS GLOBAL 30%
      borderRadius: {
        '30': "30px",
        '30p': "30%", 
      },

      // 📏 ICONES (Taille standard)
      spacing: {
        icon: "24px",
        "icon-lg": "32px",
        "icon-sm": "16px"
      },

      // 🟣 TAILLES DES CARTES
      width: {
        card: "350px",
        "card-lg": "450px",
      },
      height: {
        card: "200px",
      }
    },
  },

  // 📌 POUR AJOUTER LES COMPOSANTS PERSONNALISÉS
  plugins: [
    function ({ addComponents }) {
      // 🔵 BOUTONS
      const buttons = {
        ".btn": {
          padding: ".6rem 1.2rem",
          borderRadius: "30px",
          fontWeight: "500",
          display: "inline-block",
        },

        ".btn-primary": {
          backgroundColor: "#667EEA",
          color: "#fff",
          "&:hover": { backgroundColor: "#9A6EF2" }
        },

        ".btn-secondary": {
          backgroundColor: "transparent",
          border: "1px solid #667EEA",
          color: "#667EEA",
          "&:hover": {
            borderColor: "#8271D7",
            color: "#8271D7"
          }
        },

        ".btn-tertiary": {
          color: "#000",
          "&:hover": { color: "#FF7F7F" }
        }
      };

      // 🔶 CARDS
      const cards = {
        ".card": {
          backgroundColor: "#fff",
          borderRadius: "30px",
          padding: "1.5rem",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }
      };

      // 🟢 INPUTS / SELECT / CHECKBOX / RADIO
      const form = {
        ".input": {
          border: "1px solid #ccc",
          borderRadius: "30px",
          padding: ".5rem 1rem",
          width: "200px"
        },
        ".select": {
          border: "1px solid #ccc",
          borderRadius: "30px",
          padding: ".4rem 1rem",
        },
        ".checkbox": {
          width: "20px",
          height: "20px",
          borderRadius: "30%",
          border: "1px solid #999"
        },
        ".radio": {
          width: "18px",
          height: "18px",
          borderRadius: "50%",
          border: "1px solid #999"
        }
      };

      addComponents(buttons);
      addComponents(cards);
      addComponents(form);
    }
  ]
};
