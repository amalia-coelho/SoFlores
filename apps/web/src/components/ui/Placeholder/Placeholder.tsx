import styles from "./Placeholder.module.css";

type PlaceholderProps = {
  label: string;
  className?: string;
};

export function Placeholder({ label, className }: PlaceholderProps) {
  return (
    <div className={`${styles.placeholder} ${className ?? ""}`}>{label}</div>
  );
}
