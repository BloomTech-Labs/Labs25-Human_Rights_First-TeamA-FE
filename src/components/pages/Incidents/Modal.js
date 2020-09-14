import React, { useState } from 'react';
import { Modal } from 'antd';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const IncidentModal = props => {
  const [visible, setVisible] = useState(false);
  const incident = props.incident;

  const showModal = () => {
    setVisible(true);
  };

  const hideModal = () => {
    setVisible(false);
  };

  const getTweetId = url => {
    return url.split('/').pop();
  };

  return (
    <>
      <p onClick={showModal}>{`${
        props.incident.city
      }: ${props.incident.date.slice(0, 10)}`}</p>
      <Modal
        onClick={showModal}
        closable={true}
        onCancel={hideModal}
        footer={null}
        visible={visible}
      >
        <div className="modal-incident-container">
          <div className="modal-incident-title">
            <h2>{incident.title}</h2>
            <p>{incident.date.slice(0, 10)}</p>
          </div>
          <div className="incident-links-container">
            {incident.links.map(url => (
              <>
                {url.toLowerCase().includes('twitter') ? (
                  <TwitterTweetEmbed tweetId={getTweetId(url)} />
                ) : (
                  <p>{url}</p>
                )}
              </>
            ))}
          </div>
        </div>
        <TwitterTweetEmbed />
      </Modal>
    </>
  );
};

export default IncidentModal;
