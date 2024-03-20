import styles from "@/styles/orderBuButton.module.scss";

interface OrderByProps {
  setOrderBy: (value: string) => void;
}

export function OrderByButton({ setOrderBy }: OrderByProps) {
  return (
    <select
      onChange={(e) => setOrderBy(e.target.value)}
      defaultValue="Sort By"
      className={styles.orderBy}
    >
      <option value="default">Default</option>
      <option value="nameAz">Name A-z</option>
      <option value="nameZa">Name Z-a</option>
      <option value="dateOfBirthASC">Date of Birth ASC</option>
      <option value="dateOfBirthDESC">Date of Birth DESC</option>
      <option value="alive">Is Alive</option>
    </select>
  );
}
