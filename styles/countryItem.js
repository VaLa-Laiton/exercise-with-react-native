import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#485460",
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    padding: 7.5,
    borderRadius: 7.5,
    marginBottom: 15,
    marginHorizontal: 10,
  },
  flagColumn: {
    flex: 1,
    alignItems: "flex-start",
  },
  img: {
    width: 100,
    height: 60,
    marginBottom: 5,
  },
  restColumn: {
    flex: 1,
    marginLeft: 5,
    height: "100%",
    justifyContent: "center",
  },
  textPrinBold: {
    fontSize: 18,
    color: "#b8b8b8",
  },
  textPrin: {
    fontSize: 16,
    color: "#dedede",
  },
  textPrinSe: {
    fontSize: 16,
    color: "#b8b8b8",
  },
  textSecond: {
    fontSize: 14,
    color: "#dedede",
  },
  link: {
    fontSize: 17,
    color: "#4da6ff",
    textDecorationLine: "underline",
  },
});
