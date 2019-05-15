import React from 'react'

import { FlexColumn, FlexRow, Text } from '../../atoms'
import { AmenitiesLink, Card, PropertyImage } from '../../molecules'
import { toCurrency } from '../../../utils'

const PropertyCard = ({
  amenities,
  images,
  name,
  neighborhood,
  rent_stats,
  slug,
  unit_stats
}) => {
  const { image: imageData, order: imageOrder } = images[0]
  const { header: imageUrl } = imageData

  const { avg_rent } = rent_stats
  const { max_rooms, min_rooms } = unit_stats
  const { name: neighborhoodName } = neighborhood

  const formatRooms = () => `${min_rooms} - ${max_rooms}`

  // Will prevent the Card's redirect from overriding the Amenities' redirect
  const stopParentEvents = e => e.stopPropagation()

  return (
    <Card id={slug} to={`/${slug}`}>
      <FlexRow>
        <PropertyImage alt={imageOrder} url={imageUrl} />
        <FlexColumn>
          <Text>{toCurrency(avg_rent)}</Text>
          <Text>{formatRooms()}</Text>
          <AmenitiesLink
            count={amenities.length}
            handleClick={stopParentEvents}
            slug={slug}
          />
        </FlexColumn>
      </FlexRow>
      <FlexRow>
        <FlexColumn>
          <Text>{name}</Text>
          <Text>{neighborhoodName}</Text>
        </FlexColumn>
      </FlexRow>
    </Card>
  )
}

export default PropertyCard
