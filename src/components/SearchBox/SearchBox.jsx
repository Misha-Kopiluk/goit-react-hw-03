import styles from "./SearchBox.module.css";

const SearchBox = (props) => {
  const { filter, setFilter } = props;

  return (
    <div className={styles.container}>
      <label className={styles.text}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          value={filter}
          onChange={(event) => setFilter(event.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
