import { styled } from "styled-components";
import create from "zustand";
// theme.js
export const themes = {
  light: {
    name: "☀️",
    background: "#FFFFFF",
    text: "#000000",
    headers: "#000000",
    links: "#01BAEF",
  },
  dark: {
    name: "🌒",
    background: "#0F0E17",
    text: "#A7A9BE",
    headers: "#FFFFFE",
    links: "#FF8906",
  },
};

// StyledComponent.js

export default create((set) => ({
  theme: "light",
  setTheme: (theme) => set({ theme }),
}));

export const StyledComponent = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  padding: 10px;
  border-radius: 4px;
`;
