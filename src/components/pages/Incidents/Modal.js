import React, { useState } from 'react';
import { Modal } from 'antd';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import Loader from 'react-loader-spinner';

const IncidentModal = props => {
  const [visible, setVisible] = useState(false);
  const incident = props.incident;

  const formatDate = new Date(props.incident.date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  // example: https://twitter.com/hungrybowtie/status/1277159562563317760 = 1277159562563317760
  const getTweetId = url => {
    return url.split('/').pop();
  };

  return (
    <>
      {/* check for timeline vs popover view */}
      {props.timeline ? (
        <p onClick={showModal}>{`${props.incident.city}: ${formatDate}`}</p>
      ) : (
        <button onClick={showModal}>View All Evidence</button>
      )}
      <Modal
        destroyOnClose={true}
        onClick={showModal}
        closable={true}
        onCancel={hideModal}
        footer={null}
        visible={visible}
      >
        <div className="modal-incident-container">
          <div className="modal-incident-title">
            <h2>{incident.title}</h2>
            <p>{formatDate}</p>
          </div>
          <div className="incident-links-container">
            {/* TODO: link should be a separate component */}
            {incident.links.map(url => (
              <div key={`modal-${url}`}>
                {url.toLowerCase().includes('twitter') ? (
                  <div className="loader-and-tweet-embed-container">
                    <div className="loader-container">
                      {' '}
                      <Loader
                        type="Circles"
                        color="#00BFFF"
                        height={40}
                        width={40}
                      />
                    </div>
                    <div className="tweet-embed-container">
                      <TwitterTweetEmbed tweetId={getTweetId(url)} />
                    </div>
                  </div>
                ) : (
                  <div id="evidence-link">
                    <p>
                      <a href={url}>{url}</a>
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default IncidentModal;
