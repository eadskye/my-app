import React from 'react';

class App extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
         data: 'Number',
         name: 'name',
         frequency: 'frequency',
         relationship: 'relationship',
         economic:'economic',
         education: 'education',
         disclosure: 'disclosure',
         partner: 'partner'
      }

      this.handleInputChange = this.handleInputChange.bind(this);
   };

   handleInputChange(event) {
     const target = event.target;
     const value = target.type === 'checkbox' ? target.checked : target.value;
     const name = target.name;

   }


   render() {
     var visible;
     if(this.state.dropOpen){
       visible= "visible";
     } else {
       visible= "hidden";
     }

      return (

         <div>
         <h3>Assessment Instructions</h3>
        <p>Please select the people in your life who you are in contact with daily, weekly, and monthly over the last six months. If there are any irregularities in contact over the last six months, choose the predominant pattern of contact (e.g., choose weekly contact if you usually talk to this person on the phone almost once a week but you were in Europe for a month so you missed those weeks). Please do not include anyone who you are in contact with less than once a month. The method of contact used for the purposes of building your social map can only include in-person meet-ups and/or phone calls.</p>

            <h3>Family</h3>

            <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

            Add Family Member
            <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
            </button>

            <form>

                <label>
                  Name:
                  <input
                      type="text" name="name" value = {this.props.myDataProp}
                    onChange={this.handleInputChange} />
                </label>
                    <div class="dropdown">
                  <button class="btn btn-default dropdown-toggle" id="frequencydrop">
                    Frequency of Contact
                    <span class="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>

                  </ul>
                </div>


                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                Relationship
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                </button>
                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                Economic Status
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                </button>
                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

              Level of Education
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                </button>
                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

              What level of self disclosure is currently possible in this relationship?
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                </button>
                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                Submit Family Section
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>


                </button>
              </form>
              <h3>Spouse/Partner</h3>
              <form>
                  <label>
                    Do you have a spouse or romantic partner?
                    <input
                        type="text" name="partner" value = {this.props.myDataProp}
                      value={this.state.numberOfFamily}
                      onChange={this.handleInputChange} />
                  </label>
                  <label>
                    Name:
                    <input
                        type="text" name="name" value = {this.props.myDataProp}
                      value={this.state.numberOfFamily}
                      onChange={this.handleInputChange} />
                  </label>
                  <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                  Frequency of Contact
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                  </button>
                  <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                  Economic Status
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                  </button>
                  <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                Level of Education
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                  </button>
                  <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                What level of self disclosure is currently possible in this relationship?
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                  </button>
                  <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                  Submit
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                  </button>

                  </form>
                  <h3>Close Friends</h3>
                  <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                  Add Close Friends
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                  </button>

                  <form>

                      <label>
                        Name:
                        <input
                            type="text" name="name" value = {this.props.myDataProp}
                          value={this.state.numberOfFamily}
                          onChange={this.handleInputChange} />
                      </label>
                      <div className= "dropdown">
                      <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                      Frequency of Contact
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                      <span className="caret"></span>
                      </button>
                      </div>

                      <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                      Relationship
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                      </button>
                      <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                      Economic Status
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                      </button>
                      <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                    Level of Education
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                      </button>
                      <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                    What level of self disclosure is currently possible in this relationship?
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                      </button>
                      <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                      Submit Close Friends Section
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                      </button>

                    </form>
                    <h3>Friends/Aquaintances</h3>
                    <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                    Add Friends/Aquaintances
                    <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                    </button>
                    <form>

                        <label>
                          Name:
                          <input
                              type="text" name="name" value = {this.props.myDataProp}
                            value={this.state.numberOfFamily}
                            onChange={this.handleInputChange} />
                        </label>
                        <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                        Frequency of Contact
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                        </button>

                        <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                        Relationship
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                        </button>
                        <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                        Economic Status
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                        </button>
                        <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                      Level of Education
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                        </button>
                        <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                      What level of self disclosure is currently possible in this relationship?
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                        </button>
                        <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                        Submit Friends/Aquainctances Section
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                        </button>

                      </form>
                      <h3>Work/Colleagues</h3>
                      <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                      Add Work/Colleagues
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                      </button>
                      <form>

                          <label>
                            Name:
                            <input
                                type="text" name="name" value = {this.props.myDataProp}
                              value={this.state.numberOfFamily}
                              onChange={this.handleInputChange} />
                          </label>
                          <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                          Frequency of Contact
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                          </button>

                          <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                          Relationship
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                          </button>
                          <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                          Economic Status
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                          </button>
                          <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                        Level of Education
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                          </button>
                          <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                        What level of self disclosure is currently possible in this relationship?
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                          </button>
                          <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                          Submit Work/Colleagues
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                          </button>
                        </form>
                          <h3>Professional (example: therapist, doctor, mentor, coach, teacher:</h3>
                            <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                            Add Professional
                            <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                            </button>
                          <form>

                              <label>
                                Name:
                                <input
                                    type="text" name="name" value = {this.props.myDataProp}
                                  value={this.state.numberOfFamily}
                                  onChange={this.handleInputChange} />
                              </label>
                              <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                              Frequency of Contact
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                              </button>

                              <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                              Relationship
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                              </button>
                              <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                              Economic Status
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                              </button>
                              <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                            Level of Education
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                              </button>
                              <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                            What level of self disclosure is currently possible in this relationship?
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                              </button>
                              <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                            Submit Professional Section
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                              </button>
                            </form>
                            <h3>Other:</h3>
                            <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                            Add Other
                            <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                            </button>
                            <form>

                                <label>
                                  Name:
                                  <input
                                      type="text" name="name" value = {this.props.myDataProp}
                                    value={this.state.numberOfFamily}
                                    onChange={this.handleInputChange} />
                                </label>
                                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                                Frequency of Contact
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                                </button>

                                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                                Relationship
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                                </button>
                                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                                Economic Status
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                                </button>
                                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                              Level of Education
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                                </button>
                                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                              What level of self disclosure is currently possible in this relationship?
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>

                                </button>
                                <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                                Submit Other Section
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                                </button>

                              </form>


                              <button onClick= {this.props.whenClicked} className= {"btn " + this.props.className} type="button">

                              Submit Assessment
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                              </button>





         </div>




      );
   }
}
export default App;
