import { FC } from 'react';

// interfaces to define the structure of the response data, part 2 (or 1 if you prefer). wi luv typescript

interface WeaponImage {
  url: string;
}

interface Weapon {
  name: string;
  image: WeaponImage;
}
 
interface CoopStage {
  name: string;
  thumbnailImage: WeaponImage;
  image: WeaponImage;
}
  
interface Boss {
  name: string;
  id: string;
}
  
interface CoopSetting {
  boss: Boss;
  coopStage: CoopStage;
  weapons: Weapon[];
}
  
interface RegularSchedule {
  startTime: string;
  endTime: string;
  setting: CoopSetting;
}

interface ScheduleItemProps {
  schedule: RegularSchedule;
}

const Rotation: FC<ScheduleItemProps> = ({ schedule }) => {
  const { startTime, endTime, setting } = schedule;
  const { boss, coopStage, weapons } = setting;

  return (
    <div className="schedule-item">
      <h2>{coopStage.name}</h2>
      <div>
        <img
          src={coopStage.thumbnailImage.url}
          alt={coopStage.name}
          width={100}
          height={100}
        />
      </div>
      <p>
        <strong>Boss:</strong> {boss.name}
      </p>
      <p>
        <strong>Start Time:</strong> {new Date(startTime).toLocaleString()}
      </p>
      <p>
        <strong>End Time:</strong> {new Date(endTime).toLocaleString()}
      </p>

      <div className="weapons">
        <h3>Weapons:</h3>
        {weapons.map((weapon, idx) => (
          <div key={idx} className="weapon">
            <img
              src={weapon.image.url}
              alt={weapon.name}
              width={50}
              height={50}
            />
            <p>{weapon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rotation;