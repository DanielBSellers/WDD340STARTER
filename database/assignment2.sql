INSERT INTO public.account (account_firstname, account_lastname, account_email, account_password)  
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n');

UPDATE public.account  
SET account_type = 'Admin'  
WHERE account_email = 'tony@starkent.com';

DELETE FROM public.account  
WHERE account_email = 'tony@starkent.com';

UPDATE public.inventory  
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')  
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

SELECT i.inv_make, i.inv_model, c.classification_name
FROM public.inventory i
INNER JOIN public.classification c
    ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';

UPDATE public.inventory
SET 
    inv_image = CONCAT(SUBSTRING(inv_image FROM 1 FOR LENGTH(inv_image) - LENGTH(SUBSTRING(inv_image FROM POSITION('/images' IN inv_image) FOR LENGTH(inv_image)))), '/vehicles', SUBSTRING(inv_image FROM POSITION('/images' IN inv_image) FOR LENGTH(inv_image))),
    inv_thumbnail = CONCAT(SUBSTRING(inv_thumbnail FROM 1 FOR LENGTH(inv_thumbnail) - LENGTH(SUBSTRING(inv_thumbnail FROM POSITION('/images' IN inv_thumbnail) FOR LENGTH(inv_thumbnail)))), '/vehicles', SUBSTRING(inv_thumbnail FROM POSITION('/images' IN inv_thumbnail) FOR LENGTH(inv_thumbnail)))
;
