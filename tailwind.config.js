/** @type {import("tailwindcss").Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            container: {
                center: true,
                padding: {
                    DEFAULT: "2rem",
                    sm: "2.5rem",
                    md: "3.25rem",
                    lg: "5rem",
                    xl: "7.5rem",
                    "2xl": "10rem",
                },
            },
            backgroundSize: {
                135: "135%",
                175: "175%",
                248: "248%",
            },
            colors: {
                primary: {
                    1: "#3B71FE",
                    2: "#8BC5E5",
                    3: "#92A5EF",
                    4: "#58C27D",
                },
                secondary: {
                    1: "#A4CDE3",
                    2: "#E4D7CF",
                    3: "#FFD166",
                    4: "#FA8F54",
                },
                neutral: {
                    1: "#141416",
                    2: "#23262F",
                    3: "#353945",
                    4: "#777E90",
                    5: "#B1B5C3",
                    6: "#E6E8EC",
                    7: "#F4F5F6",
                    8: "#FCFCFD",
                },
                gradient: {
                    1: "#ecf8fc",
                },
            },
        },
        fontFamily: {
            DMSansBold: "DMSans Bold",
            PoppinsRegular: "Poppins Regular",
            PoppinsMedium: "Poppins Medium",
            PoppinsSemiBold: "Poppins SemiBold",
            PoppinsBold: "Poppins Bold",
        },
        screens: {
            DEFAULT: "375px",
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1440px",
        },
        boxShadow: {
            dropdown: "0px 40px 32px -24px rgba(15, 15, 15, 0.12)",
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("child", "& > *");
            addVariant("child-hover", "& > *:hover");
        },
    ],
};
