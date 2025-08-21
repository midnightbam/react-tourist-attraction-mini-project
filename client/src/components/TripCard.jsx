import React from "react";
import { truncate } from "../utils/text";
import { safeThumbs } from "../utils/images";
import Tag from "./Tag";

class TripCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.copyLink = this.copyLink.bind(this);
  }

  async copyLink() {
    try {
      await navigator.clipboard.writeText(this.props.trip.url);
      this.setState({ copied: true });
      setTimeout(() => this.setState({ copied: false }), 1200);
    } catch (e) {
      console.error("Copy failed", e);
    }
  }

  render() {
    const { trip, onTagClick } = this.props;
    const { copied } = this.state;

    const bigImage = (trip && trip.photos && trip.photos[0]) || "";
    const thumbs = safeThumbs(trip && trip.photos, 3); // 3 รูปเล็ก

    return (
      <article className="trip-card">
        <a
          href={trip.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cover"
          aria-label={trip.title}
        >
          <img src={bigImage} alt={trip.title} />
        </a>

        <div className="trip-body">
          <h3 className="trip-title">
            <a href={trip.url} target="_blank" rel="noopener noreferrer">
              {trip.title}
            </a>
          </h3>

          <p className="trip-desc">{truncate(trip.description, 100)}</p>

          <div className="thumb-row">
            {thumbs.map((src, i) => (
              <img className="thumb" key={i} src={src} alt={`thumb-${i}`} />
            ))}
          </div>

          <div className="meta-row">
            <a
              className="read-more"
              href={trip.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              อ่านต่อ
            </a>

            {/* Optional Requirement: ปุ่มคัดลอกลิงก์ */}
            <button className="copy-btn" onClick={this.copyLink} title="คัดลอกลิงก์">
              {copied ? "คัดลอกแล้ว" : "คัดลอกลิงก์"}
            </button>
          </div>

          <div className="tags">
            {(trip.tags || []).map((tag) => (
              <Tag key={tag} label={tag} onClick={() => onTagClick && onTagClick(tag)} />
            ))}
          </div>
        </div>
      </article>
    );
  }
}

export default TripCard;
