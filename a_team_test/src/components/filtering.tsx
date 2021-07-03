import React, { useState, useRef, useEffect } from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

interface filterProps {
  hendleFiltering: (answer: string) => void;
  fixFiltering: (answer: string) => void;
  clearFiltering: () => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    formControl: {
      margin: theme.spacing(3),
    },
  })
);

function Filtering({
  hendleFiltering,
  fixFiltering,
  clearFiltering,
}: filterProps) {
  const classes = useStyles();
  const manuEl: any = useRef();
  const [isOpenA, setIsOpenA] = useState<boolean>(false);
  const [isOpenB, setIsOpenB] = useState<boolean>(false);
  const [stateA, setStateA] = useState({
    밀링: false,
    선반: false,
  });

  const [stateB, setStateB] = useState({
    알루미늄: false,
    탄소강: false,
    구리: false,
    합급강: false,
    강철: false,
  });

  const handleClickOutside = (e: any) => {
    if (isOpenA || (isOpenB && !manuEl.current.contains(e.target))) {
      setIsOpenA(false);
      setIsOpenB(false);
    }
  };
  const handleClear = () => {
    setStateA({
      밀링: false,
      선반: false,
    });
    setStateB({
      알루미늄: false,
      탄소강: false,
      구리: false,
      합급강: false,
      강철: false,
    });
    clearFiltering();
  };
  const maunStateA = () => {
    setIsOpenA(!isOpenA);
  };
  const maunStateB = () => {
    setIsOpenB(!isOpenB);
  };

  const handleChangeA = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateA({ ...stateA, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      hendleFiltering(String(event.target.name));
    } else {
      fixFiltering(String(event.target.name));
    }
  };

  const handleChangeB = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateB({ ...stateB, [event.target.name]: event.target.checked });
    if (event.target.checked) {
      hendleFiltering(String(event.target.name));
    } else {
      fixFiltering(String(event.target.name));
    }
  };

  //   useEffect(() => {
  //     window.addEventListener("click", handleClickOutside);

  //     return () => {
  //       window.removeEventListener("click", handleClickOutside);
  //     };
  //   });

  const { 밀링, 선반 } = stateA;
  const { 알루미늄, 탄소강, 구리, 합급강, 강철 } = stateB;

  //   useEffect(() => {
  //     let filterAnswer = [];
  //     let prop: any;

  //     // for (let prop in stateA) {
  //     //   if (stateA[prop]) {
  //     //     filterAnswer.push(prop);
  //     //   }
  //     // }
  //   }, [stateA || stateB]);
  return (
    <div className="filtering">
      <div>
        <button onClick={maunStateA}>
          가공방식<i className="fas fa-caret-down"></i>
        </button>
        {isOpenA ? (
          <div className="filtering_selecter" ref={manuEl}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={밀링}
                      onChange={handleChangeA}
                      name="밀링"
                      color="primary"
                    />
                  }
                  label="밀링"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={선반}
                      onChange={handleChangeA}
                      name="선반"
                      color="primary"
                    />
                  }
                  label="선반"
                />
              </FormGroup>
            </FormControl>
          </div>
        ) : null}
      </div>
      <div>
        <button onClick={maunStateB}>
          재료<i className="fas fa-caret-down"></i>
        </button>
        {isOpenB ? (
          <div className="filtering_selecter" ref={manuEl}>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={알루미늄}
                      onChange={handleChangeB}
                      name="알루미늄"
                      color="primary"
                    />
                  }
                  label="알루미늄"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={탄소강}
                      onChange={handleChangeB}
                      name="탄소강"
                      color="primary"
                    />
                  }
                  label="탄소강"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={구리}
                      onChange={handleChangeB}
                      name="구리"
                      color="primary"
                    />
                  }
                  label="구리"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={합급강}
                      onChange={handleChangeB}
                      name="합급강"
                      color="primary"
                    />
                  }
                  label="합급강"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={강철}
                      onChange={handleChangeB}
                      name="강철"
                      color="primary"
                    />
                  }
                  label="강철"
                />
              </FormGroup>
            </FormControl>
          </div>
        ) : null}
      </div>
      <div className="filtering_reset" onClick={handleClear}>
        <i className="fas fa-redo-alt"></i>
        <div>필터링 리셋</div>
      </div>
    </div>
  );
}

export default Filtering;
