SELECT 
    DATE_FORMAT(registration_date, '%Y-%m'),
    COUNT(*) AS registrations
FROM 
    Registrations
WHERE 
    registration_date >= CURDATE() - INTERVAL 12 MONTH
GROUP BY 
    DATE_FORMAT(registration_date, '%Y-%m')
ORDER BY 
    DATE_FORMAT(registration_date, '%Y-%m');
