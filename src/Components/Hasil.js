import React, { Component } from "react";
import { Badge, Col, ListGroup, Row } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";
export default class Hasil extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt={2}>
        <h4>Daftar Hasil</h4>
        <hr />
        <ListGroup variant="flush">
          {keranjangs &&
            keranjangs.map((keranjang) => 
            <ListGroup.Item>
                <Row>
                    <Col xs={2}>
                    <h4>
                        <Badge pill variant="success">
                        {keranjang.jumlah}
                        </Badge>
                    </h4>
                    </Col>
                    <Col>{keranjang.product.nama}</Col>
                    <Col>{numberWithCommas(keranjang.product.harga)}</Col>
                    <Col>{numberWithCommas(keranjang.total_harga)}</Col>
                </Row>
            </ListGroup.Item>
            )}
        </ListGroup>
      </Col>
    );
  }
}
