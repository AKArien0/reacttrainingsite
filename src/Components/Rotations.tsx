import { useState, useEffect } from 'react';

// Interfaces to define the structure of the response data. wi luv typescript

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
  boss: Boss
  coopStage: CoopStage
  weapons: Weapon[]
}

interface RegularSchedule {
  startTime: string
  endTime: string
  setting: CoopSetting
}

interface CoopGroupingSchedule {
  regularSchedules: {
    nodes: RegularSchedule[]
  };
}

interface data {
  coopGroupingSchedule: CoopGroupingSchedule
}

interface ApiResponse {
  data: data;
}

const Rotations = () => {
  const [scheduleData, setScheduleData] = useState<RegularSchedule[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://splatoon3.ink/data/schedules.json");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: ApiResponse = await response.json();
        setScheduleData(data.data.coopGroupingSchedule.regularSchedules.nodes);
        setLoading(false);
      } catch (err) {
        setError("Oops");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="rotations">
      <h1>Upcoming Coop Schedules</h1>

      {scheduleData && scheduleData.length > 0 ? (
        scheduleData.map((schedule, index) => {
          const { startTime, endTime, setting } = schedule;
          const { boss, coopStage, weapons } = setting;

          return (
            <div key={index} className="schedule-item">
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
        })
      ) : (
        <p>No schedules available at the moment.</p>
      )}
    </div>
  );
};

export default Rotations;
