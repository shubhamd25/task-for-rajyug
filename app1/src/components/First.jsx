import '../App.css';
import imagee from './avtar.png'

function App() {
    return (
        <div>
            <h2 className="h">
                Book Appoinment
            </h2>
            <div className="row">
                <div className="t1 col-md-4">
                    <input type="text" id="validationCustom01" value="Search By Name" required />
                    <button type="button" className="btn1">View profile</button>

                    <div className="mt-4">
                        <table className="table">
                            <thead className="headt">
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>DOB</th>

                            </thead>
                            <tbody className="bodyt">
                                <tr>
                                    <td>JHON WICK</td>
                                    <td>2568568526</td>
                                    <td>20/8/1998</td>
                                </tr>

                                <tr>
                                    <td>JHON WICK</td>
                                    <td>2568568526</td>
                                    <td>20/8/1998</td>
                                </tr>

                                <tr>
                                    <td>JHON WICK</td>
                                    <td>2568568526</td>
                                    <td>20/8/1998</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <hr />   */}
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={imagee} className="img-fluid rounded-start" alt="..." />
                                <p style={{ paddingLeft: '2em' }}>Jhon wick</p>
                            </div>
                            <div style={{ paddingLeft: '4em' }} className="col-md-8">
                                <div className="card-body">
                                    <table className="card-text">
                                        <tr>
                                            <td>Gender:</td>
                                            <td>Male</td>
                                        </tr>
                                        <tr>
                                            <td style={{ paddingBottom: '1em', paddingTop: '1em' }}>Age:</td>
                                            <td style={{ paddingBottom: '1em', paddingTop: '1em' }}>25</td>
                                        </tr>
                                        <tr>
                                            <td>City:</td>
                                            <td >Pune</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-7">
                    <div className="row t1">
                        <div className="col-md-6">
                            <h3 style={{color:'blue'}}>Details</h3>
                            <input type="text" class="form-control" id="validationCustom01" value="Mark" required />
                            <div class="form-group">
                                <label for="inputState"></label>
                                <select id="inputState" class="form-control">
                                    <option selected>Appoinment Channel</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="inputState"></label>
                                <select id="inputState" class="form-control">
                                    <option selected>Dr.Peter Parker</option>
                                    <option>...</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <h3 style={{color:'blue'}}>Appoinment details</h3>
                            <table className="table">
                                <tr>
                                    <td>John Wick</td>
                                    <td>M-98488222</td>
                                </tr>
                                <tr>
                                    <td>Walking Appoinment</td>
                                    <td>
                                        <label class="switch">
                                            <input type="checkbox" id="togBtn" />
                                            <div class="slider round"></div>
                                        </label>
                                    </td>
                                </tr>
                            </table>
                            <div className="row">
                                <div className="col-md-4">
                                    <div class="form-group">
                                        <h6 style={{ marginTop: '2em' }}>Schedule</h6>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="form-group">
                                        <label for="inputState"></label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Date</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div class="form-group">
                                        <label for="inputState"></label>
                                        <select id="inputState" class="form-control">
                                            <option selected>Time</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12">
                            <hr />
                            <br />
                            <h2 style={{color:'blue'}}>Vital Information</h2>

                        </div>
                        <div className="col-md-6">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value="Reason"></textarea>
                        </div>

                        <div className="col-md-6">
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" value="Note for Doctor"></textarea>

                        </div>
                        <div className="col-md-6">
                            <button style={{marginLeft:'10em'}} className="btn2" type="submit">Cancel</button>
                        </div>
                        <div className="col-md-6">
                            <button className="btn2" type="reset">Book</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default App;
