import React from "react";
import "./App.css";
import SearchBar from "./components/SearchBar.jsx";
import TripsList from "./components/TripsList.jsx";
import { api } from "./services/api.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      trips: [],
      loading: false,
      error: "",
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTagClick = this.handleTagClick.bind(this);
    this.fetchTrips = this.fetchTrips.bind(this);
  }

  componentDidMount() {
    this.fetchTrips("");
  }

  async fetchTrips(keywords) {
    this.setState({ loading: true, error: "" });
    try {
      const data = await api.searchTrips(keywords);
      this.setState({ trips: data?.data || [] });
    } catch (e) {
      this.setState({ error: e?.message || "Unknown error" });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleInputChange(value) {
    this.setState({ query: value });
  }

  handleSearch() {
    const q = (this.state.query || "").trim();
    this.fetchTrips(q); 
  }

  handleTagClick(tag) {
    const tokens = (this.state.query || "")
      .split(" ")
      .map((t) => t.trim())
      .filter(Boolean);

    if (!tokens.includes(tag)) tokens.push(tag);

    const next = tokens.join(" ");
    this.setState({ query: next }, () => {
      this.fetchTrips(next);
    });
  }

  render() {
    const { query, trips, loading, error } = this.state;

    return (
      <div className="App">
        <header className="site-header">
          <h1 className="brand">เที่ยวไหนดี</h1>
        </header>

        <SearchBar
          value={query}
          onChange={this.handleInputChange}
          onSearch={this.handleSearch}
        />

        <main className="content">
          {loading && <p className="muted">กำลังโหลด...</p>}
          {!!error && <p className="error">เกิดข้อผิดพลาด: {error}</p>}

          {!loading && !error && (
            <TripsList items={trips} onTagClick={this.handleTagClick} />
          )}
        </main>
      </div>
    );
  }
}

export default App;
