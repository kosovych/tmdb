import React from 'react'
import {
  Row, Col, Typography, Card
} from 'antd'
import PropTypes from 'prop-types'

import { getImageUrl } from 'Utils'

const Credits = ({ cast, crew, loading }) => (
  !loading && (
    <>
      {Boolean(cast.length) && (
        <>
          <Row>
            <Col
              span={10}
              offset={2}
              className="top-margin"
            >
              <Typography.Title level={3}>Casts</Typography.Title>
            </Col>
          </Row>
          <Row
            gutter={8}
            type="flex"
          >
            <Col
              span={20}
              offset={2}
            >
              <Row
                gutter={{
                  xs: 8, sm: 16, md: 24, lg: 32
                }}
              >
                {cast.map(({
                  creditId,
                  profilePath,
                  name,
                  character
                }) => (
                  <Col
                    key={creditId}
                    xs={{ span: 24 }}
                    sm={{ span: 12 }}
                    md={{ span: 8 }}
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                  >
                    <Card
                      cover={(
                        <img
                          alt="example"
                          height="750"
                          src={getImageUrl(profilePath)}
                        />
                      )}
                      className="top-margin"
                    >
                      <Card.Meta
                        title={name}
                        description={character}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </>
      )}
      {Boolean(crew.length) && (
        <>
          <Row>
            <Col
              span={10}
              offset={2}
              className="top-margin"
            >
              <Typography.Title level={3}>Crew</Typography.Title>
            </Col>
          </Row>
          <Row
            gutter={8}
            type="flex"
          >
            <Col
              span={20}
              offset={2}
            >
              <Row gutter={{
                xs: 8, sm: 16, md: 24, lg: 32
              }}
              >
                {crew.map(({
                  creditId,
                  profilePath,
                  name,
                  job
                }) => (
                  <Col
                    key={creditId}
                    xs={{ span: 12 }}
                    sm={{ span: 8 }}
                    md={{ span: 6 }}
                    lg={{ span: 8 }}
                    xl={{ span: 6 }}
                  >
                    <Card
                      className="top-margin"
                      cover={(
                        <img
                          alt="example"
                          height="750"
                          src={getImageUrl(profilePath)}
                        />
                      )}
                    >
                      <Card.Meta
                        title={name}
                        description={job}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </>
      )}
    </>
  )
)

Credits.propTypes = {
  loading: PropTypes.bool.isRequired,
  cast: PropTypes.arrayOf(PropTypes.shape()),
  crew: PropTypes.PropTypes.arrayOf(PropTypes.shape())
}

Credits.defaultProps = {
  cast: null,
  crew: null
}

export default Credits
