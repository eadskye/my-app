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

            <div className= "family">
            <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

            Add Family Member

            </button>
            </div>
            <form>

                <label>
                  Name:
                  <input
                      type="text" name="name" value = {this.props.myDataProp}
                    onChange={this.handleInputChange} />
                </label>
                <label>
                  Age:
                  <input
                      type="number" age="age" value = {this.props.myDataProp}
                    onChange={this.handleInputChange} />
                </label>
                <div className= "dropdown">
                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                Frequency of Contact
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                <span className="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>Daily</li>
                  <li>Weekly</li>
                  <li>Monthly</li>

                </ul>
                </div>


                <div className= "dropdown">
                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                Relationship
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                <span className="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>Parent</li>
                  <li>Sibling</li>
                  <li>Extended</li>
                  <li>In-Law</li>

                </ul>
                </div>

                <div className= "dropdown">
                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                Gender
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                <span className="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>Female</li>
                  <li>Male</li>
                  <li>Transgender</li>
                  <li>Other</li>


                </ul>
                </div>
                <div className= "dropdown">
                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                Race/Ethnicity
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                <span className="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>White</li>
                  <li>Black/African American</li>
                  <li>Asian</li>
                  <li>Pacific Islander</li>
                  <li>Two or More Races</li>
                  <li>Hispanic/Latino</li>
                  <li>Native American</li>

                </ul>
                </div>


                <div className= "dropdown">
                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                Level of Education
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                <span className="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>Less Than a High School Education</li>
                  <li>High School Diploma/GED</li>
                  <li>Associates Degree</li>
                  <li>Bachelors Degree</li>
                  <li>Masters Degree</li>
                  <li>Doctorate</li>


                </ul>
                </div>
                <div className= "dropdown">
                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                Economic Position
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                <span className="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>Lower</li>
                  <li>Lower-middle</li>
                  <li>Middle</li>
                  <li>Upper-Middle</li>
                  <li>Upper</li>

                </ul>
                </div>

                <div className= "dropdown">
                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                What level of self disclosure is currently possible in this relationship?
                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                <span className="caret"></span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                  <li>(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person.</li>
                  <li>(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much.</li>
                  <li>(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy.</li>
                  <li>(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me. </li>
                  <li>(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me.</li>

                </ul>
                </div>
                <div className= "submit">
                <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                Submit Family Section

                </button>
                </div>

              </form>




              <h3>Spouse/Partner</h3>
              <form>
              <div className= "dropdown">
              <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

              Do you have a spouse or a romantic partner?
              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
              <span className="caret"></span>
              </button>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li>Yes</li>
                <li>No</li>


              </ul>
              </div>
                  <label>
                    Name:
                    <input
                        type="text" name="name" value = {this.props.myDataProp}
                      value={this.state.numberOfFamily}
                      onChange={this.handleInputChange} />
                  </label>
                  <label>
                    Age:
                    <input
                        type="number" age="age" value = {this.props.myDataProp}
                      onChange={this.handleInputChange} />
                  </label>
                  <div className= "dropdown">
                  <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                  Frequency of Contact
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                  <span className="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Monthly</li>

                  </ul>
                  </div>

                  <div className= "dropdown">
                  <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                  Gender
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                  <span className="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>Female</li>
                    <li>Male</li>
                    <li>Transgender</li>
                    <li>Other</li>


                  </ul>
                  </div>
                  <div className= "dropdown">
                  <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                  Race/Ethnicity
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                  <span className="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>White</li>
                    <li>Black/African American</li>
                    <li>Asian</li>
                    <li>Pacific Islander</li>
                    <li>Two or More Races</li>
                    <li>Hispanic/Latino</li>
                    <li>Native American</li>

                  </ul>
                  </div>


                  <div className= "dropdown">
                  <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                  Level of Education
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                  <span className="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>Less Than a High School Education</li>
                    <li>High School Diploma/GED</li>
                    <li>Associates Degree</li>
                    <li>Bachelors Degree</li>
                    <li>Masters Degree</li>
                    <li>Doctorate</li>


                  </ul>
                  </div>
                  <div className= "dropdown">
                  <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                  Economic Position
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                  <span className="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>Lower</li>
                    <li>Lower-middle</li>
                    <li>Middle</li>
                    <li>Upper-Middle</li>
                    <li>Upper</li>

                  </ul>
                  </div>

                  <div className= "dropdown">
                  <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                  What level of self disclosure is currently possible in this relationship?
                  <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                  <span className="caret"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                    <li>(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person.</li>
                    <li>(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much.</li>
                    <li>(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy.</li>
                    <li>(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me. </li>
                    <li>(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me.</li>


                  </ul>
                  </div>
                  <div className= "submit">
                  <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                  Submit Partner Section

                  </button>
                  </div>
                  </form>





                  <h3>Close Friends</h3>
                  <div className= "closeFriends">
                  <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                  Add Close Friends

                  </button>
                  </div>
                  <form>

                      <label>
                        Name:
                        <input
                            type="text" name="name" value = {this.props.myDataProp}
                          value={this.state.numberOfFamily}
                          onChange={this.handleInputChange} />
                      </label>
                      <label>
                        Age:
                        <input
                            type="number" age="age" value = {this.props.myDataProp}
                          onChange={this.handleInputChange} />
                      </label>
                      <div className= "dropdown">
                      <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                      Frequency of Contact
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                      <span className="caret"></span>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>Daily</li>
                        <li>Weekly</li>
                        <li>Monthly</li>

                      </ul>
                      </div>

                      <div className= "dropdown">
                      <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                      Gender
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                      <span className="caret"></span>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>Female</li>
                        <li>Male</li>
                        <li>Transgender</li>
                        <li>Other</li>


                      </ul>
                      </div>
                      <div className= "dropdown">
                      <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                      Race/Ethnicity
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                      <span className="caret"></span>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>White</li>
                        <li>Black/African American</li>
                        <li>Asian</li>
                        <li>Pacific Islander</li>
                        <li>Two or More Races</li>
                        <li>Hispanic/Latino</li>
                        <li>Native American</li>

                      </ul>
                      </div>


                      <div className= "dropdown">
                      <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                      Level of Education
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                      <span className="caret"></span>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>Less Than a High School Education</li>
                        <li>High School Diploma/GED</li>
                        <li>Associates Degree</li>
                        <li>Bachelors Degree</li>
                        <li>Masters Degree</li>
                        <li>Doctorate</li>


                      </ul>
                      </div>
                      <div className= "dropdown">
                      <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                      Economic Position
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                      <span className="caret"></span>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>Lower</li>
                        <li>Lower-middle</li>
                        <li>Middle</li>
                        <li>Upper-Middle</li>
                        <li>Upper</li>

                      </ul>
                      </div>

                      <div className= "dropdown">
                      <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                      What level of self disclosure is currently possible in this relationship?
                      <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                      <span className="caret"></span>
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li>(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person.</li>
                        <li>(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much.</li>
                        <li>(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy.</li>
                        <li>(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me. </li>
                        <li>(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me.</li>

                      </ul>
                      </div>
                      <div className= "submit">
                      <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                      Submit Close Friends Section

                      </button>
                      </div>

                    </form>






                    <h3>Friends/Aquaintances</h3>
                    <div className= "family">
                    <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                    Add Friends/Aquaintances

                    </button>
                    </div>
                    <form>

                        <label>
                          Name:
                          <input
                              type="text" name="name" value = {this.props.myDataProp}
                            value={this.state.numberOfFamily}
                            onChange={this.handleInputChange} />
                        </label>
                        <label>
                          Age:
                          <input
                              type="number" age="age" value = {this.props.myDataProp}
                            onChange={this.handleInputChange} />
                        </label>
                        <div className= "dropdown">
                        <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                        Frequency of Contact
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                        <span className="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li>Daily</li>
                          <li>Weekly</li>
                          <li>Monthly</li>

                        </ul>
                        </div>

                        <div className= "dropdown">
                        <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                        Gender
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                        <span className="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li>Female</li>
                          <li>Male</li>
                          <li>Transgender</li>
                          <li>Other</li>


                        </ul>
                        </div>
                        <div className= "dropdown">
                        <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                        Race/Ethnicity
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                        <span className="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li>White</li>
                          <li>Black/African American</li>
                          <li>Asian</li>
                          <li>Pacific Islander</li>
                          <li>Two or More Races</li>
                          <li>Hispanic/Latino</li>
                          <li>Native American</li>

                        </ul>
                        </div>


                        <div className= "dropdown">
                        <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                        Level of Education
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                        <span className="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li>Less Than a High School Education</li>
                          <li>High School Diploma/GED</li>
                          <li>Associates Degree</li>
                          <li>Bachelors Degree</li>
                          <li>Masters Degree</li>
                          <li>Doctorate</li>


                        </ul>
                        </div>
                        <div className= "dropdown">
                        <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                        Economic Position
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                        <span className="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li>Lower</li>
                          <li>Lower-middle</li>
                          <li>Middle</li>
                          <li>Upper-Middle</li>
                          <li>Upper</li>

                        </ul>
                        </div>

                        <div className= "dropdown">
                        <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                        What level of self disclosure is currently possible in this relationship?
                        <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                        <span className="caret"></span>
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                          <li>(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person.</li>
                          <li>(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much.</li>
                          <li>(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy.</li>
                          <li>(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me. </li>
                          <li>(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me.</li>

                        </ul>
                        </div>
                        <div className= "submit">
                        <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                        Submit Friends/Aquaintances Section

                        </button>
                        </div>
                      </form>



                      <h3>Work/Colleagues</h3>
                      <div className= "family">
                      <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                      Add Work/Colleagues

                      </button>
                      </div>
                      <form>

                          <label>
                            Name:
                            <input
                                type="text" name="name" value = {this.props.myDataProp}
                              value={this.state.numberOfFamily}
                              onChange={this.handleInputChange} />
                          </label>
                          <label>
                            Age:
                            <input
                                type="number" age="age" value = {this.props.myDataProp}
                              onChange={this.handleInputChange} />
                          </label>
                          <div className= "dropdown">
                          <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                          Frequency of Contact
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                          <span className="caret"></span>
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>Daily</li>
                            <li>Weekly</li>
                            <li>Monthly</li>

                          </ul>
                          </div>

                          <div className= "dropdown">
                          <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                          Relationship
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                          <span className="caret"></span>
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>Co-worker</li>
                            <li>Colleague</li>
                            <li>Employee</li>
                            <li>Supervisor</li>

                          </ul>
                          </div>

                          <div className= "dropdown">
                          <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                          Gender
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                          <span className="caret"></span>
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>Female</li>
                            <li>Male</li>
                            <li>Transgender</li>
                            <li>Other</li>


                          </ul>
                          </div>
                          <div className= "dropdown">
                          <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                          Race/Ethnicity
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                          <span className="caret"></span>
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>White</li>
                            <li>Black/African American</li>
                            <li>Asian</li>
                            <li>Pacific Islander</li>
                            <li>Two or More Races</li>
                            <li>Hispanic/Latino</li>
                            <li>Native American</li>

                          </ul>
                          </div>


                          <div className= "dropdown">
                          <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                          Level of Education
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                          <span className="caret"></span>
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>Less Than a High School Education</li>
                            <li>High School Diploma/GED</li>
                            <li>Associates Degree</li>
                            <li>Bachelors Degree</li>
                            <li>Masters Degree</li>
                            <li>Doctorate</li>


                          </ul>
                          </div>
                          <div className= "dropdown">
                          <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                          Economic Position
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                          <span className="caret"></span>
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>Lower</li>
                            <li>Lower-middle</li>
                            <li>Middle</li>
                            <li>Upper-Middle</li>
                            <li>Upper</li>

                          </ul>
                          </div>

                          <div className= "dropdown">
                          <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                          What level of self disclosure is currently possible in this relationship?
                          <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                          <span className="caret"></span>
                          </button>
                          <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li>(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person.</li>
                            <li>(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much.</li>
                            <li>(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy.</li>
                            <li>(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me. </li>
                            <li>(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me.</li>

                          </ul>
                          </div>
                          <div className= "submit">
                          <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                          Submit Work/Colleagues Section

                          </button>
                          </div>
                        </form>


                          <h3>Professional (example: therapist, doctor, mentor, coach, teacher):</h3>
                          <div className= "family">
                          <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                          Add Professional

                          </button>
                          </div>
                          <form>

                              <label>
                                Name:
                                <input
                                    type="text" name="name" value = {this.props.myDataProp}
                                  value={this.state.numberOfFamily}
                                  onChange={this.handleInputChange} />
                              </label>
                              <label>
                                Age:
                                <input
                                    type="number" age="age" value = {this.props.myDataProp}
                                  onChange={this.handleInputChange} />
                              </label>
                              <div className= "dropdown">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                              Frequency of Contact
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                              <span className="caret"></span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>Daily</li>
                                <li>Weekly</li>
                                <li>Monthly</li>

                              </ul>
                              </div>
                              <div className= "dropdown">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                              Relationship
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                              <span className="caret"></span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>Teacher</li>
                                <li>Mentor/Coach</li>
                                <li>Therapist/Counselor</li>
                                <li>Clergy</li>
                                <li>Physician</li>
                                <li>Legal</li>

                              </ul>
                              </div>

                              <div className= "dropdown">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                              Gender
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                              <span className="caret"></span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>Female</li>
                                <li>Male</li>
                                <li>Transgender</li>
                                <li>Other</li>


                              </ul>
                              </div>
                              <div className= "dropdown">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                              Race/Ethnicity
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                              <span className="caret"></span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>White</li>
                                <li>Black/African American</li>
                                <li>Asian</li>
                                <li>Pacific Islander</li>
                                <li>Two or More Races</li>
                                <li>Hispanic/Latino</li>
                                <li>Native American</li>

                              </ul>
                              </div>


                              <div className= "dropdown">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                              Level of Education
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                              <span className="caret"></span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>Less Than a High School Education</li>
                                <li>High School Diploma/GED</li>
                                <li>Associates Degree</li>
                                <li>Bachelors Degree</li>
                                <li>Masters Degree</li>
                                <li>Doctorate</li>


                              </ul>
                              </div>
                              <div className= "dropdown">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                              Economic Position
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                              <span className="caret"></span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>Lower</li>
                                <li>Lower-middle</li>
                                <li>Middle</li>
                                <li>Upper-Middle</li>
                                <li>Upper</li>

                              </ul>
                              </div>

                              <div className= "dropdown">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                              What level of self disclosure is currently possible in this relationship?
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                              <span className="caret"></span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person.</li>
                                <li>(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much.</li>
                                <li>(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy.</li>
                                <li>(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me. </li>
                                <li>(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me.</li>

                              </ul>
                              </div>
                              <div className= "submit">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                              Submit Professional Section

                              </button>
                              </div>
                            </form>
                            <h3>Other:</h3>
                            <div className= "family">
                            <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                            Add Other

                            </button>
                            </div>
                            <form>

                                <label>
                                  Name:
                                  <input
                                      type="text" name="name" value = {this.props.myDataProp}
                                    value={this.state.numberOfFamily}
                                    onChange={this.handleInputChange} />
                                </label>
                                <label>
                                  Age:
                                  <input
                                      type="number" age="age" value = {this.props.myDataProp}
                                    onChange={this.handleInputChange} />
                                </label>
                                <label>
                                  Relationship:
                                  <input
                                      type="number" age="age" value = {this.props.myDataProp}
                                    onChange={this.handleInputChange} />
                                </label>
                                <div className= "dropdown">
                                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                                Frequency of Contact
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                                <span className="caret"></span>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                  <li>Daily</li>
                                  <li>Weekly</li>
                                  <li>Monthly</li>

                                </ul>
                                </div>
                                <div className= "dropdown">
                                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                                Gender
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                                <span className="caret"></span>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                  <li>Female</li>
                                  <li>Male</li>
                                  <li>Transgender</li>
                                  <li>Other</li>


                                </ul>
                                </div>
                                <div className= "dropdown">
                                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                                Race/Ethnicity
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                                <span className="caret"></span>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                  <li>White</li>
                                  <li>Black/African American</li>
                                  <li>Asian</li>
                                  <li>Pacific Islander</li>
                                  <li>Two or More Races</li>
                                  <li>Hispanic/Latino</li>
                                  <li>Native American</li>

                                </ul>
                                </div>


                                <div className= "dropdown">
                                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                                Level of Education
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                                <span className="caret"></span>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                  <li>Less Than a High School Education</li>
                                  <li>High School Diploma/GED</li>
                                  <li>Associates Degree</li>
                                  <li>Bachelors Degree</li>
                                  <li>Masters Degree</li>
                                  <li>Doctorate</li>


                                </ul>
                                </div>
                                <div className= "dropdown">
                                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                                Economic Position
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                                <span className="caret"></span>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                  <li>Lower</li>
                                  <li>Lower-middle</li>
                                  <li>Middle</li>
                                  <li>Upper-Middle</li>
                                  <li>Upper</li>

                                </ul>
                                </div>

                                <div className= "dropdown">
                                <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                                What level of self disclosure is currently possible in this relationship?
                                <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                                <span className="caret"></span>
                                </button>
                                <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                  <li>(0) - There is almost always pressure to maintain a facade/mask or pretend to be someone one is not, when around this person.</li>
                                  <li>(1) - Being around this person is a mixed experience; sometimes he or she feels safe and trustworthy, sometimes not so much.</li>
                                  <li>(2) - Being with this person is generally a positive experience, while we have not shared that much with each other, he or she seems completely trustworthy.</li>
                                  <li>(3) - This person and I can and have shared a great deal about ourselves with each other, however sometimes I get the feeling that after sharing he or she wants to fix me. </li>
                                  <li>(4) - This person and I can and have shared a great deal about ourselves - maybe everything - with each other. No matter what I share I never get the feeling they want to fix me.</li>

                                </ul>
                                </div>
                                <div className= "submit">
                                <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                                Submit Other Section

                                </button>
                                </div>
                              </form>
                              <h3>Reflective Form</h3>
                              <div className= "dropdown">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default dropdown-toggle"}>

                              In your opinion, how satisfied are you with the support and love you feel from your social network?
                              <span className= {this.props.subTitleClassName}>{this.props.subTitle}</span>
                              <span className="caret"></span>
                              </button>
                              <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                                <li>(0) - Not satisfied at all.</li>
                                <li>(1) - Minimally satisfied.</li>
                                <li>(2) - Moderately satisfied.</li>
                                <li>(3) - Adequately satisfied. </li>
                                <li>(4) - Abundantly satisfied.</li>

                              </ul>
                              </div>
                              <div className= "submit">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                              Submit Reflective Section

                              </button>
                              </div>


                              <div className= "SubmitAssessment">
                              <button onClick= {this.props.whenClicked} className= {"btn btn-default"}>

                              Make My Social Map

                              </button>
                              </div>



         </div>




      );
   }
}
export default App;
