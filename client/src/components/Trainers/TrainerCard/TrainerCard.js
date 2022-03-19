import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  TrainerDescription,
  TrainerDiv,
  TrainerDownDiv,
  TrainerImg,
  TrainerImgDiv,
  TrainerKnowMore,
  TrainerName,
  TrainerRole,
  TrainersWrapper1,
  TrainerUpDiv,
} from "./TrainerCardElements";
const TraineeCard = () => {
  const [allTrainers, setAllTrainers] = useState([]);
  useEffect(() => {
    const getAllTrainers = async () => {
      const result = await axios.get("trainer/get/all-trainers");
      if (!result.data) return;
      console.log(result.data);
      setAllTrainers(result.data);
    };
    getAllTrainers();
  }, []);
  return (
    <TrainersWrapper1>
      {allTrainers?.length > 0
        ? allTrainers?.map((trainer) => (
            <TrainerDiv key={trainer.trainer_profile_id}>
              <TrainerUpDiv></TrainerUpDiv>
              <TrainerDownDiv>
                <TrainerImgDiv>
                  <TrainerImg
                    src={
                      !trainer.trainer_image
                        ? "https://navrik.blob.core.windows.net/navrikimage/default.jpg"
                        : trainer.trainer_image
                    }
                    alt="trainer picture"
                  />
                </TrainerImgDiv>
                <TrainerName>
                  {trainer.trainer_firstname + " " + trainer.trainer_lastname}
                </TrainerName>
                <TrainerRole>Trainer</TrainerRole>
                <TrainerDescription>
                  {trainer.trainer_description}
                </TrainerDescription>
                <TrainerKnowMore>
                  <Link
                    style={{ textDecoration: "none", color: "black" }}
                    to={`/trainers/details/${trainer.trainer_profile_id}`}
                  >
                    Know More
                  </Link>
                </TrainerKnowMore>
              </TrainerDownDiv>
            </TrainerDiv>
          ))
        : null}
    </TrainersWrapper1>
  );
};

export default TraineeCard;
