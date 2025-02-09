import { useState, useEffect } from 'react';
import Rotation from './Rotation';

// interfaces to define the structure of the response data, part 1 (or 2 if you prefer). wi luv typescript

interface RegularSchedule {}

interface CoopGroupingSchedule {
  regularSchedules: {
    nodes: RegularSchedule[];
  };
}

interface Data {
  coopGroupingSchedule: CoopGroupingSchedule;
}

interface ApiResponse {
  data: Data;
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
        setError("Oops, something went wrong.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger text-center">{error}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Upcoming Coop Schedules</h1>

      {scheduleData && scheduleData.length > 0 ? (
        scheduleData.map((schedule, index) => (
          <Rotation key={index} schedule={schedule} />
        ))
      ) : (
        <p className="text-center">No schedules available at the moment.</p>
      )}
    </div>
  );
};

export default Rotations;
