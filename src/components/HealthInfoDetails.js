import React from 'react';
import './HealthInfoDetails.css'; // Ensure this CSS file exists

const healthInfoContent = {
  Nutrients: {
    title: 'Nutrients',
    content: (
      <>
        <p>Nutrients are essential substances the body requires to function properly, providing energy and supporting bodily processes.</p>

        <h2>Types & Benefits:</h2>
        <ul>
          <li><b>Carbohydrates:</b> Primary energy source (found in rice, bread, fruits).</li>
          <li><b>Proteins:</b> Essential for muscle repair and growth (found in meat, eggs, dairy).</li>
          <li><b>Fats:</b> Provide long-term energy and support cell function (found in nuts, oils, fish).</li>
          <li><b>Vitamins & Minerals:</b> Aid immunity, bone strength, and overall health (found in vegetables, dairy).</li>
          <li><b>Water:</b> Crucial for hydration and bodily functions.</li>
        </ul>

        <h2>Importance of Hydration:</h2>
    <p>Water is essential for survival. It helps in regulating body temperature, transporting nutrients, and flushing out toxins. It is recommended to drink at least <strong>8 glasses</strong> of water daily to stay hydrated.</p>

    <h2>How to Get These Nutrients Daily?</h2>
    <ul>
        <li>Include a variety of whole foods such as grains, lean proteins, healthy fats, and fresh fruits/vegetables in your meals.</li>
        <li>Meal planning helps ensure a balanced intake of all nutrients.</li>
        <li>Use healthy cooking methods like steaming, grilling, or baking instead of frying.</li>
        <li>Drink enough water throughout the day instead of sugary drinks.</li>
        <li>Limit processed foods and opt for natural sources of vitamins and minerals.</li>
    </ul>

    <h2>FAQs on Nutrients</h2>
    <div class="faq">
        <h4>1. Why are carbohydrates important, and should I avoid them for weight loss?</h4>
        <p>Carbohydrates are the body’s main energy source. Whole grains, fruits, and vegetables provide fiber and essential Nutrients. Instead of avoiding them completely, choose complex carbs like oats, quinoa, and brown rice over refined carbs like white bread and sugary snacks.</p>

        <h4>2. How can I increase my protein intake if I’m vegetarian?</h4>
        <p>Plant-based protein sources include lentils, chickpeas, tofu, quinoa, nuts, and dairy products. Combining grains with legumes (like rice and beans) ensures you get all essential amino acids.</p>

        <h4>3. What are healthy fats, and why do we need them?</h4>
        <p>Healthy fats, such as omega-3 fatty acids, help with brain function, heart health, and reducing inflammation. Found in avocados, nuts, seeds, olive oil, and fatty fish, these fats are essential for nutrient absorption. Avoid trans fats found in fried and processed foods.</p>

        <h4>4. Can I get all the necessary vitamins from food, or should I take supplements?</h4>
        <p>A well-balanced diet with a variety of fruits, vegetables, dairy, and protein sources should provide all essential vitamins and minerals. However, if you have deficiencies (like Vitamin D or B12), consult a doctor for supplements.</p>

        <h4>5. How does dehydration affect the body?</h4>
        <p>Dehydration can cause fatigue, dizziness, headaches, and poor concentration. It also affects digestion and skin health. To prevent this, drink enough water and consume hydrating foods like cucumbers, oranges, and watermelon.</p>

        <h4>6. What are the best foods for long-lasting energy?</h4>
        <p>Foods that provide sustained energy include:
            <ul>
                <li>Complex carbs (sweet potatoes, whole grains).</li>
                <li>Lean proteins (chicken, eggs, beans).</li>
                <li>Healthy fats (avocados, nuts, seeds).</li>
            </ul>
        </p>

        <h4>7. What’s the best time to eat for better digestion?</h4>
        <p>Eating small, balanced meals throughout the day helps digestion. Try to eat dinner at least 2-3 hours before bedtime to avoid bloating and acidity.</p>
    </div>
      </>
    )
  },

  Vitamins: {
    title: 'Vitamins & Minerals',
    content: (
      <>
        <p>Vitamins and minerals are crucial for metabolism, immunity, and overall well-being. They play a vital role in energy production, cell repair, and maintaining a healthy body.</p>

        <h2> Vitamins & Benefits:</h2>
        <ul>
          <li><b>Vitamin A:</b> Improves vision, supports the immune system (found in carrots, sweet potatoes).</li>
          <li><b>Vitamin B12:</b> Boosts nerve function and red blood cell production (found in meat, eggs, dairy).</li>
          <li><b>Vitamin C:</b> Enhances skin health, boosts immunity (found in citrus fruits, bell peppers).</li>
          <li><b>Vitamin D:</b> Strengthens bones (found in dairy, fish, sunlight exposure).</li>
          <li><b>Vitamin E:</b> Acts as an antioxidant, protects cells (found in nuts, seeds, spinach).</li>
          <li><b>Vitamin K:</b> Helps in blood clotting and bone health (found in leafy greens, broccoli, soybeans).</li>
         
        </ul>

        <h2>Essential Minerals & Benefits:</h2>
    <ul>
        <li><strong>Calcium:</strong> Strengthens bones and teeth (found in dairy, tofu, almonds).</li>
        <li><strong>Iron:</strong> Prevents anemia and improves oxygen transport (found in red meat, spinach, lentils).</li>
        <li><strong>Magnesium:</strong> Supports muscle and nerve function (found in nuts, whole grains, dark chocolate).</li>
        <li><strong>Potassium:</strong> Regulates fluid balance and heart function (found in bananas, avocados, potatoes).</li>
        <li><strong>Zinc:</strong> Boosts immunity and wound healing (found in nuts, beans, seafood).</li>
    </ul>



        <h2>How to Maintain Balanced Vitamin Intake?</h2>
        <p>To ensure you get all essential vitamins and minerals, consume a balanced diet that includes:.</p>
        <li>A variety of colorful vegetables and fruits.</li>
        <li>Lean proteins like fish, poultry, and legumes.</li>
        <li>Dairy products or plant-based alternatives for calcium.</li>
        <li>Whole grains, nuts, and seeds for essential minerals.</li>
        <li>Healthy fats from avocados, nuts, and olive oil.</li>
        <li>Moderate sun exposure for natural Vitamin D synthesis.</li>
        <h2>FAQs on Vitamins & Minerals</h2>
        <h4>1. What is the difference between vitamins and minerals?</h4>
        <p>Vitamins are organic compounds (e.g., Vitamin C) that help body functions, while minerals are inorganic elements (e.g., iron, calcium) needed for various processes.</p>

        <h4>2. What happens if I have a vitamin deficiency?</h4>
        <p>Vitamin deficiencies can lead to health issues like weak immunity, fatigue, poor bone health, and skin problems.</p>

        <h4>3. How can I get enough Vitamin D naturally?</h4>
        <p>Spend time in sunlight, eat foods like fish and dairy, or take supplements if necessary.</p>

        <h4>4. Can I take too many vitamins?</h4>
        <p>Yes, excessive intake of certain vitamins (like Vitamin A or iron) can be toxic and cause health problems.</p>

        <h4>5. Why is iron important for health?</h4>
        <p>Iron helps transport oxygen in the blood and prevents anemia, which can cause fatigue and weakness.</p>

        <h4>6. What are the best sources of calcium besides dairy?</h4>
        <p>Leafy greens, almonds, tofu, and fortified plant-based milks are great non-dairy sources of calcium.</p>

        <h4>7. How do vitamins and minerals work together?</h4>
        <p>Some vitamins help the body absorb minerals, like Vitamin D helping with calcium absorption for stronger bones.</p>

        <h4>8. What are signs of a magnesium deficiency?</h4>
        <p>Signs include muscle cramps, fatigue, and irregular heartbeat.</p>

        <h4>9. Why is Vitamin B12 important?</h4>
        <p>Vitamin B12 is crucial for nerve function, brain health, and making red blood cells.</p>

        <h4>10. Do I need supplements if I eat a healthy diet?</h4>
        <p>If you eat a balanced diet, you may not need supplements, but some people (like vegetarians or those with deficiencies) may benefit from them.</p>
      </>
    )
  },

  Diseases: {
    title: 'Common Diseases & Prevention',
    content: (
      <>
          <p>Many diseases can be prevented by maintaining a healthy lifestyle, proper nutrition, and regular health check-ups.</p>

        <h2>Common Diseases & Prevention:</h2>
        <ul>
          <li><b>Diabetes:</b> Control sugar intake, exercise regularly.</li>
          <li><b>Hypertension:</b> Maintain a low-sodium diet, manage stress.</li>
          <li><b>Heart Disease:</b> Eat heart-healthy foods, avoid smoking.</li>
          <li><b>Influenza:</b> Get vaccinated, maintain hygiene.</li>
          <li><b>Obesity:</b> Maintain a balanced diet, stay active.</li>
          <li><b>Osteoporosis:</b> Strengthen bones with calcium and vitamin D.</li>
        <li><b>Asthma:</b>Avoid allergens, use prescribed inhalers, maintain indoor air quality</li>
        <li><b>Arthritis:</b>Maintain a healthy weight, engage in low-impact exercises like yoga.</li>
        <li><b>Stroke:</b>Control blood pressure, maintain a heart-healthy diet, avoid excessive alcohol.</li>
        <li><b>Cancer:</b>Eat antioxidant-rich foods, avoid smoking, get regular screenings.</li>
        <li><b>Alzheimer's</b>Stay mentally active, consume brain-boosting foods, maintain social connections.</li>
        </ul>

        <h2>How to Strengthen Immunity?</h2>
        <p>Boosting your immune system helps in disease prevention and overall well-being. Here are key ways to strengthen immunity:</p>
        <li><strong>Eat a nutrient-rich diet:</strong> Include fruits, vegetables, nuts, and lean proteins.</li>
        <li><strong>Get enough sleep:</strong> Aim for 7-9 hours of quality sleep per night.</li>
        <li><strong>Exercise regularly:</strong> Engage in moderate exercise like walking, yoga, or strength training.</li>
        <li><strong>Stay hydrated:</strong> Drink plenty of water to support bodily functions.</li>
        <li><strong>Manage stress:</strong> Practice meditation, deep breathing, or mindfulness.</li>
        <li><strong>Avoid smoking and alcohol:</strong> These weaken the immune system over time.</li>
        <li><strong>Take probiotics:</strong> Improve gut health with yogurt, kefir, or probiotic supplements.</li>
        <li><strong>Get regular health check-ups:</strong> Early detection can prevent severe health complications.</li>

        <h2>FAQs on Common Diseases & Prevention</h2>
        <h4>1. How can I prevent getting the flu?</h4>
        <p>Wash your hands regularly, avoid close contact with infected individuals, eat a healthy diet, and get a flu shot annually.</p>

        <h4>2. What are the early symptoms of diabetes?</h4>
        <p>Increased thirst, frequent urination, unexplained weight loss, fatigue, and slow-healing wounds.</p>

        <h4>3. How can I lower my risk of heart disease?</h4>
        <p>Adopt a heart-healthy diet, exercise regularly, quit smoking, manage stress, and monitor blood pressure and cholesterol levels.</p>

        <h4>4. What are the best ways to maintain a healthy immune system?</h4>
        <p>Eat a balanced diet, exercise, get enough sleep, manage stress, and stay hydrated.</p>

        <h4>5. How can I prevent high blood pressure?</h4>
        <p>Reduce salt intake, exercise regularly, avoid excessive alcohol, and maintain a healthy weight.</p>

        <h4>6. What should I do if I have a persistent cough?</h4>
        <p>If a cough lasts more than 2 weeks, consult a doctor. It may be due to infections, allergies, or underlying lung conditions.</p>

        <h4>7. What are the common causes of obesity?</h4>
        <p>Overeating, lack of physical activity, genetic factors, and poor diet choices.</p>

        <h4>8. How can I protect myself from respiratory infections?</h4>
        <p>Practice good hygiene, avoid smoking, stay away from polluted areas, and wear masks when necessary.</p>

        <h4>9. How can I manage stress to prevent disease?</h4>
        <p>Engage in relaxation techniques such as meditation, exercise regularly, maintain a work-life balance, and get adequate sleep.</p>

        <h4>10. What lifestyle changes can help prevent chronic diseases?</h4>
        <p>Eat a nutrient-rich diet, exercise daily, avoid tobacco and alcohol, manage weight, and go for regular health check-ups.</p>
      </>
    )
  },

  Lifestyle: {
    title: 'Healthy Lifestyle Tips',
    content: (
      <>
        <p>A balanced lifestyle promotes long-term well-being and prevents many chronic diseases.</p>
        <h2>Healthy Habits:</h2>
        <ul>
        <li><strong>Exercise:</strong> Engage in at least 30 minutes of physical activity daily.</li>
        <li><strong>Balanced Diet:</strong> Include fruits, vegetables, whole grains, and lean proteins in your meals.</li>
        <li><strong>Quality Sleep:</strong> Get 7-8 hours of sleep every night for optimal health.</li>
        <li><strong>Avoid Harmful Substances:</strong> Limit alcohol consumption, quit smoking, and reduce processed food intake.</li>
        <li><strong>Hydration:</strong> Drink at least 8 glasses of water daily to stay hydrated.</li>
        <li><strong>Mental Wellness:</strong> Manage stress with meditation, yoga, or hobbies.</li>
        <li><strong>Social Connections:</strong> Maintain strong relationships with family and friends.</li>
        <li><strong>Routine Check-ups:</strong> Visit your doctor regularly for preventive screenings.</li>
        </ul>

        <h2>How to Build a Sustainable Routine?</h2>
        <p>Set achievable health goals, track progress, and create a balanced schedule that prioritizes self-care.</p>
        <h2>FAQs on Healthy Living</h2>
   
        <h4>1. How can I start a healthy lifestyle?</h4>
        <p>Begin with small changes like eating more vegetables, drinking more water, and exercising for at least 15-30 minutes daily.</p>

        <h4>2. What are the best foods for overall health?</h4>
        <p>Include superfoods like leafy greens, berries, nuts, fatty fish, and whole grains.</p>

        <h4>3. How can I improve my sleep quality?</h4>
        <p>Maintain a regular sleep schedule, avoid screens before bedtime, and create a relaxing nighttime routine.</p>

        <h4>4. How do I stay motivated to exercise?</h4>
        <p>Set achievable goals, track progress, try different activities, and find a workout buddy.</p>

        <h4>5. How much water should I drink daily?</h4>
        <p>Aim for at least 2-3 liters (8-12 glasses), depending on your activity level and climate.</p>

        <h4>6. How can I manage stress effectively?</h4>
        <p>Practice deep breathing, mindfulness, and engage in hobbies that relax you.</p>

        <h4>7. Is it okay to have cheat meals?</h4>
        <p>Yes! Moderation is key. Enjoy occasional treats but maintain balance in your diet.</p>

        <h4>8. What are some quick exercises for busy schedules?</h4>
        <p>Try stretching, brisk walking, body-weight exercises, or 10-minute home workouts.</p>
      </>
    )
  },

MentalHealth:{
  title: 'Mental Health & Well-being',
  content:(
    <>
   <p>Mental health refers to a person's emotional, psychological, and social well-being. It affects how individuals think, feel, and behave in daily life. Good mental health enables people to handle stress, build relationships, and make decisions.</p>
  
   <h2>Common Mental Health Issues:</h2>
    <ul>
        <li><strong>Depression:</strong> Persistent sadness, loss of interest, and low energy levels.</li>
        <li><strong>Anxiety Disorders:</strong> Excessive worry, fear, and nervousness that interfere with daily life.</li>
        <li><strong>Stress:</strong> Emotional or physical tension caused by challenging situations.</li>
        <li><strong>Insomnia:</strong> Difficulty falling or staying asleep due to mental distress.</li>
        <li><strong>Burnout:</strong> Extreme exhaustion due to prolonged stress, often work-related.</li>
    </ul>
    <h2>Why is Mental Health Important?</h2>
    <p>Maintaining mental well-being is essential for overall health, as it impacts emotions, productivity, and quality of life. Poor mental health can lead to stress, anxiety, and depression, affecting both personal and professional life.</p>
    <h2>How to Cope with Stress?</h2>
    <p>Managing stress involves adopting healthy habits such as time management, relaxation techniques, and engaging in hobbies. Deep breathing exercises, journaling, and seeking emotional support can help in handling stressful situations effectively.</p>
    <h2>When to Seek Professional Help?</h2>
    <p>If persistent sadness, anxiety, or stress interferes with daily life, it's important to consult a mental health professional. Therapy, counseling, and medication (if needed) can improve mental well-being and overall quality of life.</p>
    <h2>FAQs on Mental Health & Well-being</h2>
            <h4>1. What is mental health?</h4>
            <p>Mental health includes emotional, psychological, and social well-being. It influences how we handle stress, relate to others, and make decisions in life.</p>

            <h4>2. How can I improve my mental well-being?</h4>
            <p>Some effective ways to improve mental health include:</p>
            <ul>
                <li>Regular exercise (yoga, walking, sports).</li>
                <li>Maintaining a balanced diet.</li>
                <li>Getting enough sleep (7-9 hours per night).</li>
                <li>Practicing mindfulness and meditation.</li>
                <li>Building strong social connections.</li>
                <li>Seeking professional help if needed.</li>
            </ul>

            <h4>3. What are the common signs of poor mental health?</h4>
            <p>Signs include:</p>
            <ul>
                <li>Constant feelings of sadness or hopelessness.</li>
                <li>Severe mood swings.</li>
                <li>Difficulty sleeping or excessive sleep.</li>
                <li>Loss of interest in activities once enjoyed.</li>
                <li>Increased anxiety, worry, or fear.</li>
                <li>Withdrawing from family and friends.</li>
            </ul>

            <h4>4. How does stress affect mental health?</h4>
            <p>Long-term stress can lead to anxiety, depression, headaches, sleep disorders, and weakened immunity. Managing stress through relaxation techniques, time management, and positive thinking is essential.</p>

            <h4>5. How does diet impact mental health?</h4>
            <p>A healthy diet rich in **omega-3 fatty acids (found in fish), whole grains, nuts, fruits, and vegetables** can improve brain function and mood. Avoid excessive sugar, processed foods, and caffeine.</p>

            <h4>6. What is mindfulness, and how does it help?</h4>
            <p>Mindfulness is the practice of being present in the moment without judgment. It reduces stress, enhances focus, and promotes emotional well-being. Simple mindfulness techniques include **deep breathing, meditation, and gratitude journaling**.</p>

            <h4>7. How can I help a friend struggling with mental health?</h4>
            <p>Supporting a friend includes:</p>
            <ul>
                <li>Listening without judgment.</li>
                <li>Encouraging them to talk about their feelings.</li>
                <li>Suggesting professional help if needed.</li>
                <li>Helping them engage in social or physical activities.</li>
                <li>Checking in regularly to show support.</li>
            </ul>

            <h4>8. When should I seek professional help?</h4>
            <p>If mental health symptoms interfere with daily life, relationships, or work for an extended period, consulting a **therapist, counselor, or psychologist** is recommended.</p>
</>
  )
},


  DietPlans: {
    title: 'Diet Plans & Nutrition Guides',
    content: (
      <>
        <p>A well-structured diet plan is essential for maintaining overall health, achieving fitness goals, and preventing chronic diseases. Different diets focus on specific nutritional needs, whether for weight loss, muscle gain, heart health, or general well-being. Understanding these diets helps in making informed food choices and adopting a sustainable, healthy lifestyle.</p>

        <h2>Popular Diets & Benefits:</h2>
        <ul>
          <li><b>Keto:</b> Low-carb, high-fat diet for weight loss.</li>
          <li><b>Mediterranean:</b> Balanced diet rich in healthy fats and lean proteins.</li>
          <li><b>Vegan:</b> Plant-based, eliminating all animal products.</li>
          <li><b>Balanced Diet:</b> Includes all essential nutrients in moderation.</li>
          <li><b>High-Protein:</b> Protein-rich diet for muscle growth and satiety.</li>
          <li><b>Paleo Diet:</b> Whole foods, lean meats, and vegetables; avoids processed foods.</li>
          <li><b>Intermittent Fasting:</b>Alternates eating and fasting periods for metabolic health.</li>
          <li><b>Low-Carb Diet:</b>	 Reduces carbohydrate intake for weight and blood sugar control.</li>
          <li><b>DASH Diet:</b>	 Low-sodium, nutrient-rich diet to lower blood pressure.</li>

        </ul>

        <h2>Role of Diet in Disease Prevention:</h2>
        <p>A nutrient-rich, balanced diet plays a crucial role in preventing and managing various chronic diseases. It supports immune function, reduces inflammation, and promotes overall well-being. Here’s how diet helps prevent specific health conditions:</p>
      <li><strong>Heart Disease:</strong> Diets rich in omega-3 fatty acids, fiber, and antioxidants (e.g., Mediterranean Diet) reduce cholesterol levels and improve heart health.</li>
      <li><strong>Diabetes:</strong> A low-carb or balanced diet helps regulate blood sugar levels and prevents insulin resistance.</li>
      <li><strong>Obesity:</strong> Portion control and nutrient-dense foods prevent excessive weight gain and metabolic disorders.</li>
      <li><strong>Cancer Prevention:</strong> A diet high in fruits, vegetables, and whole grains provides antioxidants that lower cancer risk.</li>
      <li><strong>Bone Health:</strong> Calcium and vitamin D-rich diets strengthen bones and prevent osteoporosis.</li>
      <li><strong>Gut Health:</strong> Probiotic and fiber-rich foods promote a healthy gut microbiome, improving digestion and immunity.</li>

      <h2>FAQs on Diet Plans & Nutrition</h2>
    
        <h4>1. What is the best diet plan for weight loss?</h4>
        <p>The best diet depends on individual needs, but balanced diets like Mediterranean or Keto can be effective for weight loss.</p>

        <h4>2. How can I ensure I get enough protein in a vegetarian diet?</h4>
        <p>Include plant-based proteins such as lentils, beans, tofu, nuts, seeds, and dairy products like Greek yogurt.</p>

        <h4>3. Is intermittent fasting safe for everyone?</h4>
        <p>Intermittent fasting is generally safe, but not recommended for pregnant women, people with diabetes, or those with eating disorders.</p>

        <h4>4. How much water should I drink daily?</h4>
        <p>It is recommended to drink at least 8 glasses (2 liters) of water per day, but this varies based on activity level and climate.</p>

        <h4>5. What are the best foods for boosting immunity?</h4>
        <p>Eat citrus fruits, garlic, ginger, yogurt, green leafy vegetables, and nuts to strengthen your immune system.</p>

        <h4>6. Can I lose weight without cutting carbs?</h4>
        <p>Yes, by eating whole carbs like fruits, vegetables, and whole grains while maintaining portion control and exercising regularly.</p>

        <h4>7. What is the best diet for heart health?</h4>
        <p>The Mediterranean diet, which includes healthy fats, lean proteins, and plenty of fruits and vegetables, is great for heart health.</p>

        <h4>8. Are cheat meals okay in a diet plan?</h4>
        <p>Occasional cheat meals are fine if balanced with regular healthy eating and physical activity.</p>

        <h4>9. What are the signs of poor nutrition?</h4>
        <p>Fatigue, weak immune system, hair loss, brittle nails, and frequent illnesses can be signs of poor nutrition.</p>

        <h4>10. How can I maintain a balanced diet on a budget?</h4>
        <p>Buy seasonal fruits and vegetables, cook at home, reduce processed food intake, and plan meals in advance to save money.</p>
      </>
    )
  },

  FirstAid: {
    title: 'First Aid & Emergency Care',
    content: (
      <>
        <p>First aid provides immediate assistance before medical professionals arrive, which can save lives in emergencies.</p>

        <h2>Basic First Aid Practices:</h2>
        <ul>
          <li><b>CPR:</b> Used for cardiac arrest emergencies.</li>
          <li><b>Wound Care:</b> Clean and bandage cuts to prevent infections.</li>
          <li><b>Burn Treatment:</b> Cool with water and apply sterile dressing.</li>
          <li><b>Fractures:</b> Immobilize the injured area and seek medical help.</li>
          <li><b>Choking First Aid:</b>	Perform the Heimlich maneuver (abdominal thrusts) to clear airway blockages.</li>
         <li><b> Nosebleed Treatment:</b>	Lean forward slightly, pinch the nose bridge, and apply a cold compress.</li>
         <li><b>Shock Management:</b>Keep the person warm, elevate legs (if no spinal injury), and reassure them.</li>
         <li><b>Poisoning Response:</b> Avoid inducing vomiting unless instructed, and seek emergency help.</li>
         <li><b>Sprains & Strains:</b>	Follow the R.I.C.E method (Rest, Ice, Compression, Elevation) to reduce swelling.</li>
         <li><b>Eye Injuries:</b>	Rinse the eye with clean water if chemicals enter; do not rub the eye.</li>
        </ul>

        <h2>How to Stay Prepared for Emergencies?</h2>
        <li>Keep a well-stocked first aid kit at home, in your car, and workplace.</li>
        <li>Learn basic first aid techniques like CPR, wound care, and choking first aid.</li>
        <li>Store emergency contacts in your phone, including family, doctors, and emergency services.</li>
        <li>Teach children and family members how to call for emergency help.</li>
        <li>Stay informed about common medical emergencies and how to respond quickly.</li>
        <li>Take a certified first aid training course to gain hands-on experience.</li>
        <li>Ensure fire extinguishers, smoke detectors, and emergency exits are available and functional..</li>

        <h2>FAQs on First Aid & Emergency Care</h2>
    
        <h4>1. What should be in a basic first aid kit?</h4>
        <p>A first aid kit should include:
            <ul>
                <li>Adhesive bandages (Band-Aids)</li>
                <li>Gauze pads and adhesive tape</li>
                <li>Antiseptic wipes and hand sanitizer</li>
                <li>Scissors and tweezers</li>
                <li>Thermometer and disposable gloves</li>
                <li>Pain relievers (ibuprofen or paracetamol)</li>
                <li>CPR face shield</li>
                <li>Emergency contact list</li>
            </ul>
        </p>

        <h4>2. What is the first thing to do in a medical emergency?</h4>
        <p>Stay calm and assess the situation. Check for any immediate dangers before helping the person. If needed, call emergency services (911 or local number) first.</p>

        <h4>3. How do I perform CPR on an adult?</h4>
        <p>
            <ul>
                <li>Check if the person is breathing and responsive.</li>
                <li>Call for emergency help.</li>
                <li>Start 30 chest compressions (push hard and fast in the center of the chest).</li>
                <li>Give 2 rescue breaths (tilt head back, pinch nose, and breathe into mouth).</li>
                <li>Repeat until help arrives or the person starts breathing.</li>
            </ul>
        </p>

        <h4>4. How do I treat a deep cut or bleeding wound?</h4>
        <p>Apply direct pressure with a clean cloth to stop the bleeding. If the bleeding is severe, elevate the wound and apply a bandage. Seek medical help if the bleeding doesn’t stop.</p>

        <h4>5. What should I do if someone is choking?</h4>
        <p>If the person is coughing, encourage them to continue. If they cannot breathe:
            <ul>
                <li>Stand behind them and perform 5 abdominal thrusts (Heimlich maneuver).</li>
                <li>For infants, give 5 back slaps and 5 chest thrusts.</li>
                <li>Call emergency services if the object isn’t removed.</li>
            </ul>
        </p>

        <h4>6. How should I treat a burn?</h4>
        <p>For minor burns, run cool (not ice-cold) water over the burn for 10 to 15 minutes. Avoid popping blisters and apply a sterile dressing. Seek medical help for severe burns.</p>

        <h4>7. How do I recognize a stroke and what should I do?</h4>
        <p>Use the FAST test:
            <ul>
                <li>Face drooping – One side of the face looks uneven.</li>
                <li>Arm weakness – One arm is weaker or numb.</li>
                <li>Speech difficulty – Slurred or strange speech.</li>
                <li>Time to call emergency help immediately.</li>
            </ul>
        </p>

        <h4>8. What should I do for a suspected broken bone?</h4>
        <p>Keep the injured limb immobilized and do not try to move it. Apply a splint or sling if available, and seek medical attention.</p>

        <h4>9. How can I prevent common home accidents?</h4>
        <p>To reduce the risk of injuries:
            <ul>
                <li>Keep sharp objects out of children’s reach.</li>
                <li>Use non-slip mats in bathrooms.</li>
                <li>Store medicines and cleaning products in locked cabinets.</li>
                <li>Have fire extinguishers and smoke detectors at home.</li>
            </ul>
        </p>

        <h4>10. What are signs of a heart attack and what should I do?</h4>
        <p>Symptoms include:
            <ul>
                <li>Chest pain or pressure</li>
                <li>Shortness of breath</li>
                <li>Pain in the arms, jaw, or back</li>
                <li>Nausea or dizziness</li>
            </ul>
            Call emergency services immediately. If the person is conscious, help them sit down and chew aspirin if not allergic.
        </p>
        
      </>
    )
  },

  MedicalTerms: {
    title: 'Medical Terms & Explanations',
    content: (
      <>
        
        <p>Medical terminology forms the foundation of healthcare communication. Whether you're a patient, caregiver, or professional, understanding these terms helps in accurately describing symptoms, understanding diagnoses, and following treatment plans. It reduces miscommunication, enhances patient care, and enables informed health decisions.</p>


        <h2>Common Medical Terms:</h2>
        <ul>

        <li><strong>Acute:</strong> A condition that develops quickly and lasts a short time (e.g., acute bronchitis).</li>
        <li><strong>Chronic:</strong> A long-term condition that progresses slowly (e.g., diabetes, arthritis).</li>
        <li><strong>Diagnosis:</strong> The identification of a disease or condition based on symptoms and tests.</li>
        <li><strong>Prognosis:</strong> The likely outcome or course of a disease.</li>
        <li><strong>Inflammation:</strong> The body's response to injury or infection, causing redness, swelling, and pain.</li>
        <li><strong>Metabolism:</strong> The chemical processes that maintain life, including energy production and digestion.</li>
        <li><strong>Immunization:</strong> The process of making a person immune to a disease, usually through vaccines.</li>
        <li><strong>Vital Signs:</strong> Key indicators of health, including heart rate, blood pressure, temperature, and respiration rate.</li>

        <li><b>Hypertension:</b> High blood pressure, often managed by lifestyle changes.</li>
          <li><b>Hypoglycemia:</b> Low blood sugar levels, treated with quick glucose intake.</li>
          <li><b>Hyperglycemia:</b> High blood sugar, common in diabetes.</li>
          <li><b>Tachycardia:</b> Increased heart rate, which may indicate an underlying condition.</li>
          <li><b>Anemia:</b> Low red blood cell count leading to fatigue and weakness.</li>
          <li><b>Arrhythmia:</b> Irregular heartbeat, causing dizziness or fainting.</li>
          <li><b>Bradycardia:</b> Slower-than-normal heart rate, leading to weakness.</li>
          <li><b>Osteoporosis:</b> Weak bones, increasing the risk of fractures.</li>
          <li><b>Edema:</b> Swelling caused by fluid retention.</li>
          <li><b>Ischemia:</b> Restricted blood flow leading to tissue damage.</li>
          <li><b>Embolism:</b> Blood vessel blockage that can be life-threatening.</li>
          <li><b>GERD:</b> Chronic acid reflux causing heartburn and irritation.</li>
        </ul>

        <h2>Why Learn Medical Terms?</h2>
        <p>Understanding medical terms allows individuals to:</p>
        <li>Better understand doctor’s advice and medical documents.</li>
          <li>Communicate effectively with healthcare professionals.</li>
          <li>Identify symptoms and seek appropriate treatment faster.</li>
          <li>Prevent confusion or misinterpretation of medical conditions.</li>
      

          <h2>FAQs on Medical Terms & Explanations</h2>
    
        <h4>1. What is the difference between a symptom and a diagnosis?</h4>
        <p>A symptom is a sign of a condition (e.g., fever), while a diagnosis is the identification of the disease causing those symptoms.</p>

        <h4>2. What does "prognosis" mean in medical terms?</h4>
        <p>Prognosis refers to the expected course and outcome of a disease, including chances of recovery.</p>

        <h4>3. What is the meaning of ‘benign’ and ‘malignant’?</h4>
        <p>‘Benign’ refers to non-cancerous growths, while ‘malignant’ refers to cancerous tumors that can spread.</p>

        <h4>4. Why are vital signs important?</h4>
        <p>Vital signs like heart rate and blood pressure help assess a person’s overall health and detect potential medical issues.</p>

        <h4>5. What is the difference between an infection and inflammation?</h4>
        <p>Infection is caused by bacteria, viruses, or fungi, while inflammation is the body’s immune response to injury or infection.</p>

        <h4>6. What is the difference between a vaccine and an immunization?</h4>
        <p>A vaccine is the substance given to prevent disease, while immunization is the process of making the body immune to a disease.</p>

        <h4>7. What does ‘autoimmune disease’ mean?</h4>
        <p>An autoimmune disease is a condition where the immune system mistakenly attacks the body’s own cells (e.g., lupus, rheumatoid arthritis).</p>

        <h4>8. What does "placebo effect" mean?</h4>
        <p>The placebo effect occurs when a patient experiences improvements from a treatment that has no active medical ingredient, due to belief in the treatment.</p>

        <h4>9. What does ‘palliative care’ mean?</h4>
        <p>Palliative care focuses on improving the quality of life for people with serious illnesses, rather than curing the disease.</p>

        <h4>10. What is the meaning of ‘allergy’?</h4>
        <p>An allergy is the body’s immune system overreacting to a harmless substance, causing symptoms like sneezing, itching, or swelling.</p>
    
      </>
    )
  }
};

const HealthInfoDetails = ({ category, onBack }) => {
  const info = healthInfoContent[category] || { title: 'Not Found', content: <p>No information available.</p> };

  return (
    <div className="health-info-details">
      <h1>{info.title}</h1>
      {info.content}
      <button onClick={onBack} className="back-button">← Back to Categories</button>
    </div>
  );
};

export default HealthInfoDetails;
