import React, { useEffect, useRef, useState } from "react";
import { fussySearch, getData } from "../helper";
import { SearchCard } from "../layout";
export const FussySearch = () => {
  const [monckData, setMonckData] = useState([]);
  const [active, setActive] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [input, setInput] = useState("");
  const selectedRef = useRef(null);

  useEffect(() => {
    setData();
  }, []);

  const setData = async () => {
    getData()
      .then((data) => {
        setMonckData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onChange = ({ target }) => {
    const { value } = target;
    setInput(value);
    const searchedData = fussySearch(monckData, value);
    setActive(0);
    setIsShow(true);
    setFiltered(searchedData);
  };

  function setChange() {
    const selected = selectedRef?.current?.querySelector(".active");
    if (selected) {
      selected?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setActive(0);
      setIsShow(false);
      setInput(filtered[active]);
    } else if (e.keyCode === 38) {
      return active === 0 ? null : setActive(active - 1);
    } else if (e.keyCode === 40) {
      return active - 1 === filtered.length ? null : setActive(active + 1);
    }
  };

  return (
    <>
      <input
        onChange={onChange}
        placeholder="Search"
        onKeyDown={onKeyDown}
        value={input}
        style={{ width: 300 }}
      />
      {isShow && input && (
        <ul
          style={{
            borderTopWidth: 0,
            listStyle: "none",
            marginTop: 0,
            maxHeight: 143,
            overflowY: "auto",
            paddingLeft: 500,
            width: 300,
          }}
          className="autocomplete"
          ref={selectedRef}>
          {filtered &&
            filtered.map((item, index) => {
              let className;
              if (index === active) {
                className = "active";
              }
              setTimeout(() => {
                setChange();
              }, [100]);
              return (
                <SearchCard
                  className={className}
                  key={index}
                  index={index}
                  active={active}
                  item={item}
                />
              );
            })}
          {!filtered.length && (
            <div>
              <em>Not found</em>
            </div>
          )}
        </ul>
      )}
    </>
  );
};
