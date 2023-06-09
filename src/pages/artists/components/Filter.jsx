import { Button, Form, Input, Label, Select } from "../../../components";
import genres from "../../../constants/genres";
import styles from "../styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setFilters, getArtists, goToPage } from "../slice";
import { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";

function Filter() {
  const { filters, page } = useSelector((state) => state.artists);
  const [isFiltered, setIsFiltered] = useState(false);
  const dispatch = useDispatch();
  const defaultFilters = {
    searchTerm: "",
    genre: "All",
    rating: 0,
    year: "All",
    orderBy: "Latest",
  };

  const onSearch = () => {
    dispatch(goToPage(1));
    dispatch(getArtists(filters));
    setIsFiltered(JSON.stringify(defaultFilters) !== JSON.stringify(filters));
  };

  const onClearFilters = () => {
    setIsFiltered(false);
    dispatch(goToPage(1));
    dispatch(setFilters(defaultFilters));
    dispatch(getArtists(defaultFilters));
  };

  useEffect(() => {
    dispatch(getArtists({ ...filters, page }));
    setIsFiltered(JSON.stringify(defaultFilters) !== JSON.stringify(filters));
    // eslint-disable-next-line
  }, [dispatch, page]);

  return (
    <Form className={styles.formContainer} onFinish={onSearch}>
      <div>
        <Label className={styles.labelLarge}> Search Term: </Label>
      </div>
      <div className={styles.inputContainer}>
        <Input
          className={styles.input}
          isControlled={true}
          value={filters.searchTerm}
          onChange={(e) => dispatch(setFilters({ searchTerm: e.target.value }))}
        />
        <Button className={styles.button}>Search</Button>
      </div>
      <div className={styles.filterContainer}>
        <div className={styles.selectContainer}>
          <Label className={styles.labelSmall}>Genre:</Label>
          <Select
            value={filters.genre}
            options={genres.map((genre) => ({
              label: genre,
              value: genre,
            }))}
            onChange={(e) => {
              dispatch(
                setFilters({
                  genre: e.target.value,
                })
              );
            }}
          />
        </div>
        <div className={styles.selectContainer}>
          <Label className={styles.labelSmall}>Rating:</Label>
          <Select
            value={filters.rating}
            options={[
              { label: "All", value: 0 },
              { label: "9+", value: 9 },
              { label: "8+", value: 8 },
              { label: "7+", value: 7 },
              { label: "6+", value: 6 },
              { label: "5+", value: 5 },
              { label: "4+", value: 4 },
              { label: "3+", value: 3 },
              { label: "2+", value: 2 },
              { label: "1+", value: 1 },
            ]}
            onChange={(e) => dispatch(setFilters({ rating: +e.target.value }))}
          />
        </div>
        <div className={styles.selectContainer}>
          <Label className={styles.labelSmall}>Year:</Label>
          <Select
            value={filters.year}
            options={[
              { label: "All", value: "All" },
              { label: "2020-2023", value: "2020-2023" },
              { label: "2010-2019", value: "2010-2019" },
              { label: "2000-2009", value: "2000-2009" },
              { label: "1990-1999", value: "1990-1999" },
              { label: "1980-1989", value: "1980-1989" },
              { label: "1970-1979", value: "1970-1979" },
              { label: "1960-1969", value: "1960-1969" },
              { label: "1950-1959", value: "1950-1959" },
              { label: "1900-1949", value: "1900-1949" },
            ]}
            onChange={(e) => dispatch(setFilters({ year: e.target.value }))}
          />
        </div>
        <div className={styles.selectContainer}>
          <Label className={styles.labelSmall}>Order By:</Label>
          <Select
            value={filters.orderBy}
            options={[
              { label: "Latest", value: "Latest" },
              { label: "Oldest", value: "Oldest" },
              { label: "Rating", value: "Rating" },
              { label: "Year", value: "Year" },
            ]}
            onChange={(e) => dispatch(setFilters({ orderBy: e.target.value }))}
          />
        </div>
        {isFiltered && (
          <div className={styles.clearFiltersBtn} onClick={onClearFilters}>
            <CloseOutlined className={styles.clearFilterIcon} />
            <div className={styles.clearFilterText}>Clear filters</div>
          </div>
        )}
      </div>
    </Form>
  );
}

export default Filter;
