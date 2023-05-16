import { CardActions, Chip } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from '../../styles/Home.module.css';

import { LaunchResponse } from '../../services/spacex/getLaunches';
import { formatDate } from '../../utils';

interface LaunchProps {
  launch: LaunchResponse;
}

export const Launch: React.FC<LaunchProps> = ({ launch }) => {
  return (
    <Card className={styles.card} sx={{}}>
      <CardMedia
        sx={{ objectFit: 'contain' }}
        component="img"
        height="200"
        image={launch.links.patch.small}
        alt={launch.name}
      />
      <CardContent>
        <Typography
          sx={{
            color: 'white',
          }}
          gutterBottom
          variant="h5"
        >
          {launch.name}
        </Typography>
        <Typography gutterBottom>{formatDate(launch.date_utc)}</Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Core ID:</strong>
          {launch.cores[0].core}
        </Typography>
        {launch.payloads.map((payload) => (
          <span key={payload.id}>
            <Typography variant="body2" color="text.secondary">
              <strong>Payload ID:</strong>
              {payload.id}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Payload type:</strong>
              {payload.type}
            </Typography>
          </span>
        ))}
      </CardContent>
      <CardActions>
        {launch.success && <Chip label="Success" color="primary" />}
        {!launch.success && <Chip label="Failure" color="error" />}
      </CardActions>
    </Card>
  );
};
