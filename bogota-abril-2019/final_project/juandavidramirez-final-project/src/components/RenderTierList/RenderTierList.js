import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { TablePagination } from "@material-ui/core";
import animate from "@jam3/gsap-promise";

import SummonerRow from "../Others/SummonerRow";
import challenger from "../../../public/images/challenger.png";
import EnhancedTableHead from "../Others/EnhancedTableHead";

import "./RenderTierList.css";

function desc(a, b, orderBy) {
  var first;
  var second;
  if (orderBy === "winPercentage") {
    first = a.wins / a.losses;
    second = b.wins / b.losses;
  } else {
    first = a[orderBy];
    second = b[orderBy];
  }
  if (second < first) {
    return -1;
  }
  if (second > first) {
    return 1;
  }
  return 0;
}

function stableSort(array, comparator) {
  const sortedArray = array.map((value, index) => [value, index]);
  sortedArray.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return sortedArray.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

class RenderTierList extends React.Component {
  state = {
    order: "asc",
    orderBy: "summoner",
    page: 0,
    rowsPerPage: 7
  };

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = "desc";

    if (this.state.orderBy === property && this.state.order === "desc") {
      order = "asc";
    }

    this.setState({ order, orderBy });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  componentDidMount() {
    animate.from(this.table, 0.3, { y: 1000, delay: 0.5 });
    animate.from(this.challengerLogo, 0.4, { x: -1280, delay: 0.4 });
    animate.from(this.header, 0.2, { y: -200, delay: 0.4 });
  }

  render() {
    const { summoners } = this.props;

    const { order, orderBy, rowsPerPage, page } = this.state;

    return (
      <section className="page-wrapper">
        <h2 className="challenger-section-title" ref={h2 => (this.header = h2)}>
          challenger elo
        </h2>
        <img
          src={challenger}
          alt="Challenger icon"
          ref={img => (this.challengerLogo = img)}
        />

        <Paper className="table-container">
          <div ref={div => (this.table = div)} className="table-wrapper">
            <Table
              className="summoners-table"
              aria-labelledby="Challenger summoners"
            >
              <colgroup>
                <col width="10%" />
                <col width="30%" />
                <col width="25%" />
                <col width="7%" />
                <col width="7%" />
                <col width="7%" />
                <col width="14%" />
              </colgroup>
              <EnhancedTableHead
                order={order}
                orderBy={orderBy}
                onRequestSort={this.handleRequestSort}
              />

              <TableBody>{this.getSummonerRows()}</TableBody>
            </Table>
          </div>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={summoners.length}
            rowsPerPage={rowsPerPage}
            page={page}
            backIconButtonProps={{
              "aria-label": "Previous Page"
            }}
            nextIconButtonProps={{
              "aria-label": "Next Page"
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </Paper>
      </section>
    );
  }

  getSummonerRows = () => {
    const { summoners } = this.props;

    const { order, orderBy, rowsPerPage, page } = this.state;

    return stableSort(summoners, getSorting(order, orderBy))
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((value, index) => {
        return (
          <SummonerRow
            summonerId={value.summonerId}
            key={index}
            rankNumber={value.rankNumber}
            name={value.summonerName}
            leaguePoints={value.leaguePoints}
            wins={value.wins}
            losses={value.losses}
            hotStreak={value.hotStreak}
            veteran={value.veteran}
            freshBlood={value.freshBlood}
          />
        );
      });
  };
}

export default RenderTierList;
