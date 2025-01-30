import { FC, useState } from 'react';
import { useAuth } from '../Auth/AuthProvider';

// interfaces to define the structure of the response data
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
  user: { username: string }; // Assuming the user prop is passed to the component
}

interface Comment {
  username: string;
  text: string;
}

const Rotation: FC<ScheduleItemProps> = ({ schedule }) => {
  const { startTime, endTime, setting } = schedule;
  const { boss, coopStage, weapons } = setting;
  const { user } = useAuth()

  // State to manage the list of comments
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>('');

  // Handle new comment submission
  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      setComments([...comments, { username: user.username, text: newComment }]);
      setNewComment(''); // Clear the input after submission
    }
  };

  return (
    <div className="container mt-5">
      <div className="schedule-item border p-4 rounded">
        <h2 className="text-center mb-3">{coopStage.name}</h2>
        <div className="text-center mb-3">
          <img
            src={coopStage.thumbnailImage.url}
            alt={coopStage.name}
            width={100}
            height={100}
            className="img-fluid"
          />
        </div>
        <p><strong>Boss:</strong> {boss.name}</p>
        <p><strong>Start Time:</strong> {new Date(startTime).toLocaleString()}</p>
        <p><strong>End Time:</strong> {new Date(endTime).toLocaleString()}</p>

        <div className="weapons mb-3">
          <h3>Weapons:</h3>
          <div className="d-flex flex-wrap">
            {weapons.map((weapon, idx) => (
              <div key={idx} className="weapon me-3 mb-3">
                <img
                  src={weapon.image.url}
                  alt={weapon.name}
                  width={50}
                  height={50}
                  className="img-fluid"
                />
                <p className="text-center">{weapon.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Commenting Section */}
        <div className="comments-section mt-4">
          <h3>Comments:</h3>
          <div>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              rows={4}
              className="form-control mb-2"
            />
            <button onClick={handleCommentSubmit} className="btn btn-primary w-100">Submit Comment</button>
          </div>

          {/* Display all comments */}
          <div className="comments-list mt-3">
            {comments.length > 0 ? (
              comments.map((comment, idx) => (
                <div key={idx} className="comment mb-2">
                  <p><strong>{comment.username}:</strong> {comment.text}</p>
                </div>
              ))
            ) : (
              <p>No comments yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rotation;
