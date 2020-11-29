import React, { Component } from "react";
import axios from "axios";
import { Modal, Row, Col } from "antd";
import "antd/dist/antd.css";
export default class tekkom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tekkom: [],
        visible: false,
        nama: "",
        asal: "",
        nim: "",
        };
    }

    handleButton = (nama) => {
        alert(nama);
    };
    handleTambahOrang = () => {
        this.setState({
        visible: true,
        });
    };
    handleNama = (e) => {
        this.setState({
        nama: e.target.value,
        });
        console.log(this.state.nama);
    };
    handleNim = (e) => {
        this.setState({
        nim: e.target.value,
        });
        console.log(this.state.nim);
    };
    handleAsal = (e) => {
        this.setState({
            asal: e.target.value,
        });
        console.log(this.state.asal);
    };
    HandleClickImage = () => {
        alert('aaa')
    }
    handleSubmit = () => {
        if (
            this.state.nama !== "" &&
            this.state.nim !== "" &&
            !this.state.asal !== ""
        ) {
            axios({
            method: "post",
            url: "https://backendcatatantugas.herokuapp.com/mahasiswa/add",
            headers: {
                accept: "*/*",
            },
            data: {
                nama: this.state.nama,
                nim: this.state.nim,
                asal: this.state.asal,
            },
            })
        .then((data) => {
            alert("berhasil ");
            window.location.reload();
        })
        .catch((error) => {
            alert("gagal ");
        });
        } else {
            alert("pastikan semua kolom terisi");
        }
    };
    componentDidMount() {
        axios({
            method: "get",
            url: "https://api.pokemontcg.io/v1/sets",
            headers: {
                accept: "*/*",
            },
        })
        .then((data) => {
            console.log(data.data.sets);
            this.setState({
                tekkom: data.data.sets,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }
    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>Pokemon Pokemon </h1>
                    </center>
                        <Modal
                        title="Tambah Orang"
                        centered
                        visible={this.state.visible}
                        onOk={this.handleSubmit}
                        onCancel={() => this.setState({ visible: false })}
                        width={500}
                        >
                    <div style={{ textAlign: "center" }}>
<p>Nama : </p>{" "}
<input
type="text"
placeholder="nama"
onChange={this.handleNama}
/>
<br />
<p>Nim : </p>{" "}
<input type="text" placeholder="nim" onChange={this.handleNim} />
<br />
<p>Asal : </p>{" "}
<input
type="text"
placeholder="asal"
onChange={this.handleAsal}
/>
<br />
</div>
</Modal>
<Row>
{this.state.tekkom.map((results, index) => {
    return (
            <div style={{border:'1px solid black'}}>
                   
                    <img src={results.logoUrl} style={{width:'100px', height:'100', margin:'5px'}}/>
                    <Col style={{backgroundColor:'blue'}}>{results.name}</Col>
                       
            </div>
        );
        })}
</Row>

        </div>
        </div>
        );
        }
        }