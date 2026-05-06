import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#00819b",
        },
    },
    components: {
        MuiButton: {
            variants: [
                {
                    props: { variant: "app" },
                    style: {
                        textTransform: "none",
                        borderRadius: "10px",
                        height: "37px",
                        fontSize: "14px",
                        padding: "10px",
                        // borderWidth: "0px",
                        backgroundColor: "#00819b",
                        color: "#fff",
                    },
                },
            ],
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "10px",
                },
                notchedOutline: {
                    borderColor: "#cccccc",
                },
            },
        },
    },
});