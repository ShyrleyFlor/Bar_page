import { MenuItem } from "@mui/material";

export default function BarrioEle({ barrio }) {
  return (
    <>
      <MenuItem value={barrio.id}>{barrio.barrio}</MenuItem>
      {console.log(barrio)}
    </>
  );
}
