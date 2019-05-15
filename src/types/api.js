import PropTypes from 'prop-types';

export const propertyType = PropTypes.shape({
  amenities: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      id: PropTypes.string,
      name: PropTypes.name
    })
  ),
  id: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      image: PropTypes.shape({ header: PropTypes.string }),
      order: PropTypes.number
    })
  ),
  name: PropTypes.string,
  neighborhood: PropTypes.shape({
    id: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string
  }),
  ratings_averages: PropTypes.shape({ overall: PropTypes.number }),
  rent_stats: PropTypes.shape({
    avg_rent: PropTypes.number,
    max_rent: PropTypes.number,
    min_rent: PropTypes.number
  }),
  slug: PropTypes.string,
  unit_stats: PropTypes.shape({
    max_rooms: PropTypes.number,
    min_rooms: PropTypes.number
  })
});

export const propertiesType = PropTypes.arrayOf(propertyType);
