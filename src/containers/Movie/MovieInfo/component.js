import React from 'react'
import {
  Row,
  Col,
  Typography,
  Tag
} from 'antd'
import PropTypes from 'prop-types'
import { map } from 'lodash'

import { convertMinutesToHours, formatPrice } from 'Utils'
import { isoLanguages } from 'Constants'
import Actions from './Actions'
import Lists from './Lists'

const MovieInfo = ({
  info, genres, loading
}) => {
  const {
    originalTitle,
    originalLanguage,
    overview,
    releaseDate,
    runtime,
    budget,
    revenue,
    firstAirDate,
    originalName
  } = info
  return !loading && (
    <>
      <Row>
        <Col
          span={20}
          offset={2}
        >
          <Typography.Title>
            <span>
              {originalTitle || originalName}
              {' '}
              (
              {new Date(releaseDate || firstAirDate).getFullYear()}
              )
            </span>
            {' '}
            <Lists />
            {' '}
            <Actions />
          </Typography.Title>
          <Typography.Title level={3}>Overview</Typography.Title>
          <Typography.Paragraph>
            {overview}
          </Typography.Paragraph>
        </Col>
      </Row>
      <Row>
        <Col
          span={20}
          offset={2}
        >
          <Typography.Paragraph>
            <b>Original Language: </b>
            <span>{isoLanguages[originalLanguage]}</span>
          </Typography.Paragraph>
        </Col>
        {Boolean(runtime) && (
          <Col
            span={20}
            offset={2}
          >
            <Typography.Paragraph>
              <b>Runtime: </b>
              <span>{convertMinutesToHours(runtime)}</span>
            </Typography.Paragraph>
          </Col>
        )}
        {Boolean(budget) && (
          <Col
            span={20}
            offset={2}
          >
            <Typography.Paragraph>
              <b>Budget: </b>
              {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
              <span>{formatPrice(budget)}</span>
            </Typography.Paragraph>
          </Col>
        )}
        {Boolean(revenue) && (
          <Col
            span={20}
            offset={2}
          >
            <Typography.Paragraph>
              <b>Revenue: </b>
              <span>
                {formatPrice(revenue)}
              </span>
            </Typography.Paragraph>
          </Col>
        )}
        <Col
          span={20}
          offset={2}
        >
          <Typography.Paragraph>
            <b>Genres: </b>
            {map(genres, genre => (
              <Tag key={genre.id}>{genre.name}</Tag>
            ))}
          </Typography.Paragraph>
        </Col>
      </Row>
    </>
  )
}

MovieInfo.propTypes = {
  info: PropTypes.shape({
    originalTitle: PropTypes.string,
    originalName: PropTypes.string,
    originalLanguage: PropTypes.string,
    overview: PropTypes.string,
    releaseDate: PropTypes.string,
    firstAirDate: PropTypes.string,
    runtime: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
  }),
  loading: PropTypes.bool.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      id: PropTypes.number
    })
  )
}

MovieInfo.defaultProps = {
  info: {
    originalTitle: '',
    originalName: '',
    originalLanguage: '',
    overview: '',
    releaseDate: null,
    firstAirDate: null,
    runtime: null,
    budget: null,
    revenue: null
  },
  genres: null
}

export default MovieInfo
